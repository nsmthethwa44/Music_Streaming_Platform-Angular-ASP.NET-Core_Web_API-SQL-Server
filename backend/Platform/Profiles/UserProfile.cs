using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Platform.Entities;
using Platform.DTOs.Users;
using Platform.Features.Authentication.DTOs;

namespace Platform.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<RegisterDto, User>();
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}