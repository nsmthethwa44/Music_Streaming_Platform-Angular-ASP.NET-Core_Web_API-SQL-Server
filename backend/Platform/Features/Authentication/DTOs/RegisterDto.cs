using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Platform.Features.Authentication.DTOs
{
    public class RegisterDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public IFormFile? ProfileImageUrl { get; set; } 
        public string Role { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}