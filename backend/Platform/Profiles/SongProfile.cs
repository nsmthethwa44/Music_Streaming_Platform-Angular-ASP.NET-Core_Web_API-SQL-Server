using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Platform.DTOs.Songs;
using Platform.Entities;
using AutoMapper;   

namespace Platform.Profiles
{
    public class SongProfile : Profile
    {
        public SongProfile()
        {
          CreateMap<UploadSongDto, Song>()
                .ForMember(
                    dest => dest.AudioUrl,
                    opt => opt.Ignore()
                )
                .ForMember(
                    dest => dest.CoverImageUrl,
                    opt => opt.Ignore()
                )
                .ForMember(
                    dest => dest.Duration,
                    opt => opt.Ignore()
                )
                .ForMember(
                    dest => dest.AudioFormat,
                    opt => opt.Ignore()
                )
                .ForMember(
                    dest => dest.ArtistId,
                    opt => opt.Ignore()
                )
                .ForMember(
                    dest => dest.CreatedAt,
                    opt => opt.Ignore()
                );


            CreateMap<Song, SongDto>()
                .ForMember(
                    dest => dest.ArtistName,
                    opt => opt.MapFrom(
                        src => src.Artist != null
                            ? src.Artist.Name
                            : string.Empty
                    )
                );
        }
    }   
 
}