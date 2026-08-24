using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.DTOs.Users;  

namespace Platform.Interfaces.Users
{
    public interface IUserService
    {
        Task<IEnumerable<UserDto>> GetAllUsersAsync();  
    }
}