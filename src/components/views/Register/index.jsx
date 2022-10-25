import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registerValidation } from "../../../validations/registerValidation";

import { swalError } from "../../../utils/swalError";
import TextField from "../../TextField";
import PrimaryButton from "../../PrimaryButton";
import SelectField from "../../SelectField";
import { fetchAuthData } from "../../../services/authServices";
import Switch from "../../Switch";

export default function Register() {
  const [dataAuth, setDataAuth] = useState([]);

  useEffect(() => {
    fetchAuthData()
      .then(setDataAuth)
      .catch(() => {
        swalError("Error al comunicarse con el servidor.");
      });
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    registerValidation();

  return (
    <div className="h-max min-h-screen py-20 flex items-center bg-white sm:bg-[#f3f3f3]">
      <form
        className="max-w-lg min-w-[310px] w-full m-auto p-6 flex flex-col gap-3 rounded-lg  bg-white sm:w-3/5 sm:border sm:shadow-md "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold">Registro</h2>
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
          id="Nombre completo"
          type="text"
          name="name"
          errors={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="Correo electrónico"
          type="email"
          name="email"
          errors={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Switch
          switchlabel="Perteneces a un equipo ya creado"
          value={values.switch}
          onChange={handleChange}
        />
        {values.switch && (
          <TextField
            id="Por favor, introduce el identificador de equipo"
            type="text"
            name="teamId"
            errors={touched.teamId && errors.teamId}
            value={values.teamId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}

        <SelectField
          id="Rol"
          type="text"
          name="rol"
          errors={touched.rol && errors.rol}
          value={values.rol}
          onChange={handleChange}
          onBlur={handleBlur}
          options={dataAuth.Rol}
        >
          <option value="">Seleccionar rol...</option>
          {dataAuth?.Rol?.map((rol) => (
            <option key={rol} value={rol}>
              {rol}
            </option>
          ))}
        </SelectField>

        <SelectField
          id="Continente"
          type="text"
          name="continent"
          errors={touched.continent && errors.continent}
          value={values.continent}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Seleccionar continente...</option>
          {dataAuth?.continente?.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </SelectField>

        {values.continent === "America" && (
          <SelectField
            id="Región"
            type="text"
            name="region"
            errors={touched.region && errors.region}
            value={values.region}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Seleccionar region...</option>
            {dataAuth?.region?.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </SelectField>
        )}

        <TextField
          id="Contraseña"
          type="password"
          name="password"
          errors={touched.password && errors.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="Repetir contraseña"
          type="password"
          name="replypassword"
          errors={touched.replypassword && errors.replypassword}
          value={values.replypassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PrimaryButton type="submit" value="Enviar" />
        <Link to="/login" className="text-sm">
          Ir a Iniciar sesión
        </Link>
      </form>
    </div>
  );
}
