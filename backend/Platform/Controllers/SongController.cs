using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Platform.Features.Authentication.DTOs;
using Platform.Features.Authentication.Services;
using Platform.Interfaces.Songs; 
using Platform.DTOs.Songs;

namespace Platform.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Authorize(Roles = "Artist")]
    public class SongController : ControllerBase
    {
        private readonly ISongService _service;
        public SongController(ISongService service)
        {
            _service = service;
        }

        // Upload a new song    
        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] UploadSongDto dto)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                return Unauthorized();
            }

            if (!int.TryParse(userIdClaim.Value, out var artistId))
            {
                return Unauthorized();
            }

            try
            {
                var song = await _service.UploadAsync(dto, artistId);
                return Ok(song);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(
                    new
                    {
                        message = ex.Message
                    }
                );
            }
        }

        // Get all songs uploaded by the authenticated artist
        [HttpGet("my-songs")]
        public async Task<IActionResult> GetMySongs()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                return Unauthorized();
            }

            if (!int.TryParse(userIdClaim.Value, out var artistId))
            {
                return Unauthorized();
            }

            var songs = await _service.GetArtistSongsAsync(artistId);
            return Ok(songs);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetSongs()
        {
            var songs = await _service.GetSongsAsync();
            return Ok(songs);
        }
    }
}