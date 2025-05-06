import useLoginContainer from "../../Containers/Auth/useLoginContainer";
import '../../Styles/loginPresentation.css'

const LoginPresentation = () => {
  const { formik } = useLoginContainer();

  return (
    <div className="login-form">
        <h1 className="form-title">Inicio de Sesión</h1>
        <h3 className="form-subTitle">Ingresa tus credenciales para iniciar sesión con tu cuenta.</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su correo electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="form-email"
        />
        {formik.touched.email && (
          <div className="form-errors">{formik.errors.email}</div>
        )}

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="form-password"
        />
        {formik.errors.password && (
          <div className="form-errors">{formik.errors.password}</div>
        )}

        <button type="submit" className="form-button">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default LoginPresentation;