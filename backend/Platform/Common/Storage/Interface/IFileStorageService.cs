using Microsoft.AspNetCore.Http;
using Platform.Common.Storage.DTO;

namespace Platform.Common.Storage.Interface
{
    public interface IFileStorageService
    {
        Task<FileUploadResultDto> UploadAsync(
            IFormFile file,
            string folder,
            CancellationToken cancellationToken = default);

        Task DeleteAsync(
            string filePath,
            CancellationToken cancellationToken = default);

        Task<FileStream?> OpenReadAsync(
            string filePath,
            CancellationToken cancellationToken = default);
    }
}
