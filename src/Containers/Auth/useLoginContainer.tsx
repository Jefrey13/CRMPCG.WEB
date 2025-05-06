import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import type { LoginRequest } from "../../Interfaces/Auth/AuthInterface";

const LoginContainer = () => {
  const { loginAsync } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().min(5).email("Email invalido"),
      password: Yup.string().required().min(6, "Contraseña invalida"),
    }),

    onSubmit: async (values: LoginRequest) => {
      try {
        const data = await loginAsync(values);
        toast.success(`Inicio de sesión exitoso ${data?.UserId}`);
        navigate("/dashboard");
      } catch (err) {
        console.log("Error: ", err);
        toast.error(
          "No se podido iniciar sesión, por favor vuelva a interntarlo"
        );
      }
    },
  });

  return { formik };
};

export default LoginContainer;