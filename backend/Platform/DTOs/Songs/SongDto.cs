using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Platform.DTOs.Songs
{
    public class SongDto
    {
         public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string AlbumTitle { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public TimeSpan Duration { get; set; }
        public string AudioUrl { get; set; } = string.Empty;
        public string? CoverImageUrl { get; set; }
        public string AudioFormat { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public int ArtistId { get; set; }
        public string ArtistName { get; set; } = string.Empty;
    }
}