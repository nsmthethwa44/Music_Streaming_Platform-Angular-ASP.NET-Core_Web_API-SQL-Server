using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Platform.Entities
{
    public class Song
    {
         public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string AlbumTitle { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        
        // Duration calculated from the uploaded audio file
        public TimeSpan Duration { get; set; }
        public string AudioUrl { get; set; } = string.Empty;
        public string? CoverImageUrl { get; set; }
        public string AudioFormat { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }

        // Artist who uploaded the song
        public int ArtistId { get; set; }
        public User Artist { get; set; } = null!;
    }
}