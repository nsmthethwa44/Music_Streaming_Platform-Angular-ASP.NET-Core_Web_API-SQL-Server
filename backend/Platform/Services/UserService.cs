using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.DTOs.Users;  
using Platform.Interfaces.Users;
using AutoMapper;

namespace Platform.Services
{
    public class UserService : IUserService 
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        // get all users
        public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
        {
            var users = await _repo.GetAllUsersAsync();
            return _mapper.Map<IEnumerable<UserDto>>(users);  
        }
     }
}