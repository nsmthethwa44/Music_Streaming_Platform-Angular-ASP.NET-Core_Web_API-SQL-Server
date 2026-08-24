using Platform.Common.Storage.Interface;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Platform.Common.Storage.DTO;

namespace Infrastructure.Storage;

public class LocalFileStorageService : IFileStorageService
{
    private readonly IWebHostEnvironment _environment;

    public LocalFileStorageService(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public async Task<FileUploadResultDto> UploadAsync(
        IFormFile file,
        string folder,
        CancellationToken cancellationToken = default)
    {
        if (file == null || file.Length == 0)
            throw new ArgumentException("Invalid file.");

        var uploadsFolder = Path.Combine(
              _environment.WebRootPath ?? Path.Combine(_environment.ContentRootPath, "wwwroot"),"uploads", folder);

        if (!Directory.Exists(uploadsFolder))
            Directory.CreateDirectory(uploadsFolder);

        var extension = Path.GetExtension(file.FileName);
        var fileName = $"{Guid.NewGuid()}{extension}";
        var fullPath = Path.Combine(uploadsFolder, fileName);

        await using var stream = new FileStream(
            fullPath,
            FileMode.Create);

        await file.CopyToAsync(stream, cancellationToken);

        return new FileUploadResultDto
        {
            FileName = fileName,
            OriginalFileName = file.FileName,
            ContentType = file.ContentType,
            Size = file.Length,
            FilePath = Path.Combine("uploads", folder, fileName).Replace("\\", "/"),
            Url = $"/uploads/{folder}/{fileName}"
        };
    }

    public async Task DeleteAsync(
        string filePath,
        CancellationToken cancellationToken = default)
    {
        var fullPath = Path.Combine(
            _environment.WebRootPath,
            filePath);

        if (File.Exists(fullPath))
        {
            await Task.Run(() => File.Delete(fullPath), cancellationToken);
        }
    }

    public Task<FileStream?> OpenReadAsync(
        string filePath,
        CancellationToken cancellationToken = default)
    {
        var fullPath = Path.Combine(
            _environment.WebRootPath,
            filePath);

        if (!File.Exists(fullPath))
            return Task.FromResult<FileStream?>(null);

        FileStream stream = new(
            fullPath,
            FileMode.Open,
            FileAccess.Read,
            FileShare.Read);

        return Task.FromResult<FileStream?>(stream);
    }
}