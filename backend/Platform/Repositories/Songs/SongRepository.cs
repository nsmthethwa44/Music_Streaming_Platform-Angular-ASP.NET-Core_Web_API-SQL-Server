using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Entities;    
using Platform.Interfaces.Songs;
using Platform.Data;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Platform.Repositories.Songs
{
        public class SongRepository : ISongRepository
    {
        private readonly ApplicationDbContext _db;
        public SongRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        // create a new song        
        public async Task<Song> CreateAsync(Song song)
        {
            _db.Songs.Add(song);
            await _db.SaveChangesAsync();
            return song;
        }

        // get a song by id 
        public async Task<Song?> GetByIdAsync(int id)
        {
            return await _db.Songs
                .Include(song => song.Artist)
                .FirstOrDefaultAsync(song => song.Id == id);
        }

        // get all songs by an artist
        public async Task<IEnumerable<Song>> GetArtistSongsAsync(int artistId)
        {
            return await _db.Songs
                .Where(song => song.ArtistId == artistId)
                .OrderByDescending(song => song.CreatedAt)
                .ToListAsync();
        }

        // get all songs
        public async Task<IEnumerable<Song>> GetSongsAsync()
        {
            return await _db.Songs
                .Include(song => song.Artist)
                .OrderByDescending(song => song.CreatedAt)
                .ToListAsync();
        }
    }
}