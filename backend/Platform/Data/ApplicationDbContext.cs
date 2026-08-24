using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Platform.Entities;

namespace Platform.Data
{
    public class ApplicationDbContext : DbContext   
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }  

       public DbSet<User> Users => Set<User>(); // users table 
       public DbSet<Song> Songs => Set<Song>(); // songs table

       protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>()
            .HasMany(user => user.Songs)
            .WithOne(song => song.Artist)
            .HasForeignKey(song => song.ArtistId)
            .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = "Admin",
                    Email = "admin@musicflow.com",
                    PasswordHash = "$2a$11$S58uDifIksZMGzrvDwj.kOhnk5AVJwPR9UIlZVvlti2akAAZcvRz2",
                    Role = "Admin",
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                });
        }
    }
}