using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.DTOs.Songs;

namespace Platform.Interfaces.Songs
{
    public interface ISongService
    {
        Task<SongDto> UploadAsync(UploadSongDto dto, int artistId);
        Task<IEnumerable<SongDto>> GetArtistSongsAsync(int artistId);
        Task<IEnumerable<SongDto>> GetSongsAsync();
    }
}