using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Entities;

namespace Platform.Features.Authentication.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}