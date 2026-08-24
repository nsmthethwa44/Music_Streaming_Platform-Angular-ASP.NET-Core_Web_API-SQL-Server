using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Platform.Features.Authentication.DTOs;    
using Platform.Features.Authentication.Interfaces;

namespace Platform.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
         private readonly IAuthService _service;
        public AuthController(IAuthService service)
        {
            _service = service;
        }

            // register new student
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] RegisterDto dto)
        {
            var success = await _service.RegisterAsync(dto);
            if (!success)
                return BadRequest("Email already exists.");
            return Ok();
        }


        // login student
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var result = await _service.LoginAsync(dto);
            if (result == null)
                return Unauthorized();
            return Ok(result);
        }
    }
}