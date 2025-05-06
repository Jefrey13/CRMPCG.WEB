import api from '../Utils/ApiConfig'
import type { LoginRequest, LoginResponse, RegisterRequest, AuthResponse, ResetPasswordRequest, VerifyEmailRequest, ForgotPasswordRequest } from '../Interfaces/Auth/AuthInterface';

export const AuthService={
    async LoginAsync(credentials: LoginRequest): Promise<LoginResponse>{
        const response = await api.post<LoginResponse>('auth/login', credentials);
        return response.data;
    },
    async RegisterAsync(credentials: RegisterRequest): Promise<AuthResponse>{
        const response = await api.post<AuthResponse>("auth/register", credentials);
        return response.data;
    },
    async ResetPasswordAsycn(credentials: ResetPasswordRequest): Promise<AuthResponse>{
        const response = await api.post<AuthResponse>("auth/ResetPassword", credentials);
        return response.data;
    },
    async VerifyEmailAsync(credentials: VerifyEmailRequest): Promise<AuthResponse>{
        const response = await api.post<AuthResponse>("auth", credentials);
        return response.data;
    },
    async ForgotPasswordAsync(credentials: ForgotPasswordRequest):Promise<AuthResponse>{
        const response = await api.post<AuthResponse>("auth/ForgotPassword", credentials);
        return response.data;
    }
    
}