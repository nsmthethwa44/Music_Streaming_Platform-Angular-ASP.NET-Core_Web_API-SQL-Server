using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.Data;    
using Platform.Interfaces;
using  Platform.Entities;
using Microsoft.EntityFrameworkCore;    

namespace Platform.Interfaces.Users 
{
    public class UserRepository : IUserRepository   
    {
        readonly ApplicationDbContext _db; 
        public UserRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }       

        public async Task<User> CreateUserAsync(User user)
        {
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return user;
        }   

        public async Task<bool> ExistAsync(int id)
        {
            return await _db.Users.AnyAsync(u => u.Id == id);
        }   

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _db.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<bool> EmailExistsAsync(string email)
        {
            return await _db.Users.AnyAsync(u => u.Email == email);
        }   
    }
}