import { useState } from "react";
import { AuthService } from "../Services/AuthService";
import type {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  VerifyEmailRequest
} from "../Interfaces/Auth/AuthInterface";
import { toast } from "react-toastify";

export function useAuth() {

  const [loading, setLoading] = useState<boolean | null>(false);

  const [error, setError] = useState<string | null>(null);

  const loginAsync = async (credentials: LoginRequest) => {
    try {
      setLoading(true);
      const data = await AuthService.LoginAsync(credentials);
      localStorage.setItem("AccessToken", data.AccessToken);
      localStorage.setItem("RefreshToken", data.RefreshToken);

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error al inciar sesión", error);
      toast.error("Error al iniciar sesión. Verifique sus credenciales.");
      setError(error.response?.data?.message || "Error al inciar sesion.");
    } finally {
      setLoading(false);
    }
  };

  const registerAsycn = async (credentials: RegisterRequest) => {
    try {
      setLoading(true);
      const data = await AuthService.RegisterAsync(credentials);

      console.log("Usuario creado correctamente.");
      toast.error("Usuario creado correctamente.");
      return data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error al crear al usuario", error);
      toast.error("Error al crear usuario, por favor intentelo de nuevo.");
      setError(
        error.response?.data?.message || "Error al registrar el nuevo usuario."
      );
    } finally {
      setLoading(false);
    }
  };

  const forgotPasswordAsync = async (credentials: ForgotPasswordRequest) => {
    try {
      setLoading(true);
      const data = await AuthService.ForgotPasswordAsync(credentials);
      console.log("Correo enviado correctamente.");
      toast.error("Correo enviado correctamente.");

      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error al enviar correo al usuario", error);
      toast.error("Error al enviar correo, por favor intentelo de nuevo.");
      setError(error.response?.data?.message || "Error al enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  const resetPasswordAsync = async (credenciales: ResetPasswordRequest) => {
    try {
      setLoading(true);
      const data = await AuthService.ResetPasswordAsycn(credenciales);
      console.log("Contraseña actualizada correctamente");
      toast.success("Contraseña actualizada correctamente");
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error al cambiar la contraseña", error);
      toast.error("Error al cambiar contraseña.", error);
      setError(
        error.response?.data?.message || "Error al cambiar la contraseña."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyEmailAsync = async (credentials: VerifyEmailRequest) => {
    try {
      setLoading(true);

      const data = await AuthService.VerifyEmailAsync(credentials);

      console.log("Correo verificado correctamente");
      toast.success("Correo verificado correctamente");
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error al verificar el correo", error);
      toast.error("Error al verificar el correo.", error);
      setError(
        error.response?.data?.message || "Error al verificar el correo."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loginAsync,
    registerAsycn,
    forgotPasswordAsync,
    resetPasswordAsync,
    verifyEmailAsync,
    error,
    loading,
  };
}