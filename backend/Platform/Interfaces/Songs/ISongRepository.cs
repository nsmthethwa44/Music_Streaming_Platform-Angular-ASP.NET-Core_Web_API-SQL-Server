using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Entities;    

namespace Platform.Interfaces.Songs
{
    public interface ISongRepository
    {
         Task<Song> CreateAsync(Song song);
        Task<Song?> GetByIdAsync(int id);
        Task<IEnumerable<Song>> GetArtistSongsAsync(int artistId);
        Task<IEnumerable<Song>> GetSongsAsync();
    }
}