using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Features.Authentication.DTOs;
using Platform.Features.Authentication.Interfaces;
using Platform.Interfaces.Users;
using Platform.Entities;
using Platform.Common.Storage.Interface;
using System.Net;
using AutoMapper;   
using Platform.DTOs.Users;  

namespace Platform.Features.Authentication.Services
{
public class AuthService : IAuthService
    {
        private readonly IUserRepository _repo;
        private readonly IJwtService _jwt;
        private readonly IFileStorageService  _storage;
        private readonly IMapper _mapper;

        public AuthService( IUserRepository repo, IJwtService jwt, IFileStorageService storage, IMapper mapper )
        {
            _repo = repo;
            _jwt = jwt;
            _storage = storage;
            _mapper = mapper;   
        }

        // login 
       public async Task<LoginResponseDto?> LoginAsync(LoginDto dto)
        {
            var user = await _repo.GetByEmailAsync(dto.Email);

            if (user == null)
            {
                Console.WriteLine("User not found");
                return null;
            }

            Console.WriteLine($"Email: {user.Email}");
            Console.WriteLine($"Hash: {user.PasswordHash}");

            var validPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);

            Console.WriteLine($"Password valid: {validPassword}");

            if (!validPassword)
                return null;

            var token = _jwt.GenerateToken(user);

            return new LoginResponseDto
            {
                Token = token,
                Email = user.Email,
                Name = user.Name,
                ProfileImageUrl = user.ProfileImageUrl ?? string.Empty, 
                Role = user.Role.ToString(),
                ExpiresAt = DateTime.UtcNow.AddHours(3)
            };
        }

        //register user 
        public async Task<bool> RegisterAsync(RegisterDto dto)
        {
            if (await _repo.EmailExistsAsync(dto.Email))
                return false;

            var user = _mapper.Map<User>(dto);

            if (dto.ProfileImageUrl != null)
            {
                var upload = await _storage.UploadAsync(dto.ProfileImageUrl, "user-images");
                user.ProfileImageUrl = upload.FilePath;
            }

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            user.CreatedAt = DateTime.UtcNow;
            var newUser = await _repo.CreateUserAsync(user);
            _mapper.Map<UserDto>(newUser);
            
            return true;
        }
    }
    
}