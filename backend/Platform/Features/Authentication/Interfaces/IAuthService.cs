using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Features.Authentication.DTOs;    

namespace Platform.Features.Authentication.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponseDto?> LoginAsync(LoginDto dto);
        Task<bool> RegisterAsync(RegisterDto dto);
    }
}