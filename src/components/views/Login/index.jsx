import { Link } from "react-router-dom";
import TextField from "../../TextField";
import PrimaryButton from "../../PrimaryButton";
import loginValidations from "../../../validations/loginValidations";

export default function Login() {
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    loginValidations();

  return (
    <div className="h-max min-h-screen px-20 flex items-center bg-white sm:bg-[#f3f3f3]">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg min-w-[310px] w-full m-auto p-6 flex flex-col gap-3 rounded-lg bg-white sm:w-3/5 sm:border sm:shadow-md"
      >
        <h2 className="text-2xl font-semibold ">Iniciar sesión</h2>
        <TextField
          id="Nombre de usuario"
          type="text"
          name="userName"
          errors={touched.userName && errors.userName}
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextField
          id="Contraseña"
          type="password"
          name="password"
          errors={touched.password && errors.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <PrimaryButton type="submit" value="Enviar" />
        <Link to="/register" className="text-sm">
          Registrarme
        </Link>
      </form>
    </div>
  );
}
