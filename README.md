## Music Streaming Platform

A full-stack music streaming platform for artists, listeners, and administrators to manage, discover, and play music.

## Project Overview

MusicFlow is a music streaming platform that provides artists with tools to upload and manage their music while allowing listeners to discover and play available songs.

The system also provides administrators with controlled access to manage the platform.

The project focuses on building a complete full-stack application with authentication, role-based access control, music management, and audio playback.

---

## User Roles & Flows
**Artist**
- Register and log in as an artist
- Upload songs in MP3 or WAV format
- Upload song cover artwork
- Provide song title, album/release title, and genre
- Automatically extract audio duration
- View uploaded songs
- Access the Artist Dashboard

**Listener**
- Register and log in as a listener
- Browse available songs
- Select songs for playback
- Use the global music player
- Access the Listener Dashboard

**Features**
- User registration and login
- JWT authentication
- BCrypt password hashing
- Role-Based Access Control (RBAC)
- Artist, Listener, and Admin dashboards
- Song uploads with MP3/WAV support
- Song cover image uploads
- Automatic audio duration extraction
- Artist song management
- Song browsing
- Global music player
- Protected Angular routes
- RESTful API
- File storage integration
- Tech Stack

**Frontend**
- Angular
- TypeScript
- HTML5
- SCSS
- Reactive Forms
- RxJS
- Angular Router

**Backend**
- ASP.NET Core Web API
- C#
- Entity Framework Core
- AutoMapper
- TagLib#

**Database**
- Microsoft SQL Server
  
**Architecture & Security**
- JWT Authentication
- Role-Based Access Control (RBAC)
- BCrypt password hashing
- Controller / Service / Repository architecture
- DTO-based API contracts
- Dependency Injection
- SOLID principles
- Architecture & Design

---

The application follows a layered architecture with clear separation between controllers, services, repositories, entities, DTOs, and external storage services. DTOs are used for API contracts, while the service and repository layers separate business logic from data access. Authentication and RBAC protect application resources and restrict functionality according to user roles.

---

## Project Structure
/musicflow
│
├── /backend
│   └── /Platform
│       ├── Controllers
│       ├── Common
│       ├── Data
│       ├── DTOs
│       ├── Entities
│       ├── Features
│       ├── Interfaces
│       ├── Profiles
│       ├── Repositories
│       └── Services
│
├── /frontend
│   └── /src
│       └── /app
│           ├── auth
│           ├── dashboards
│           ├── music-player
│           ├── models
│           └── services
│
└── /db
    └── migrations

---
    
## Links

- Live Demo: https://musicflowplatform.netlify.app/
- GitHub Repository: https://github.com/nsmthethwa44/Music_Streaming_Platform-Angular-ASP.NET-Core_Web_API-SQL-Server

## Notes

This project was built as a portfolio project to demonstrate full-stack application development using Angular and ASP.NET Core, including authentication, authorization, API development, database integration, file handling, and music management.