export interface User{
    id: number;
    name: string;
    email: string;
    profileImageUrl: string;
    role: number;
    token: string;
}

export enum UserRoles {
    Admin = 1,
    Artist = 2,
    Listener = 3
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserResponse {
    email: string;
    token: string;
    name: string;
    profileImageUrl: string;
    role: string;
    expiresAt: string;
}

