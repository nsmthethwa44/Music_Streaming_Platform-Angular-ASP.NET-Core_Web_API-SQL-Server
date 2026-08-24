using Platform.Entities;

namespace Platform.Interfaces.Users
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> CreateUserAsync(User user);  
        Task<bool> ExistAsync(int id);

        // auth login & register
        Task<User?> GetByEmailAsync(string email);
        Task<bool> EmailExistsAsync(string email);
    }
}
