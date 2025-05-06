export interface LoginRequest{
    email:string;
    password:string;
}

export interface LoginResponse{
    AccessToken: string;
    RefreshToken: string;
    ExpiresAt: Date;
    UserId:string;
    ContactId:string;
}

export interface RegisterRequest{
    FullName: string;
    Email: string;
    Password: string;
    CompanyName:string;
    ContactName:string;
    Phone:string;
    Country:string;
} 

export interface AuthResponse{
    AccessToken: string;
    RefreshToken: string;
    ExpiresAt: Date;
    UserId:string;
    ContactId:string;
}

export interface ForgotPasswordRequest{
    Email: string;
}

export interface ResetPasswordRequest{
    Token:string;
    NewPassword: string;
}

export interface VerifyEmailRequest{
    Token:string;
}