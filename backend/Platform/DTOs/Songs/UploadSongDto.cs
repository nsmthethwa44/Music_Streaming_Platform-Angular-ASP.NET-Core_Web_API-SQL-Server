using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Platform.DTOs.Songs
{
    public class UploadSongDto
    {
        public string Title { get; set; } = string.Empty;
        public string AlbumTitle { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public IFormFile AudioFile { get; set; } = null!;   
        public IFormFile? CoverImage { get; set; }
    }
}