import Swal from "sweetalert2";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { swalError } from "../utils/swalError";

export const registerValidation = () => {
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    email: "",
    switch: false,
    teamId: "",
    rol: "",
    continent: "",
    region: "",
    password: "",
    replypassword: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Campo obligatorio")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    email: Yup.string()
      .email("El formato no es valido")
      .required("Campo obligatorio"),
    switch: Yup.boolean(),
    teamId: Yup.string().when("switch", {
      is: true,
      then: Yup.string().required("Campo obligatorio"),
    }),
    rol: Yup.string().required("Campo obligatorio"),
    continent: Yup.string().required("Campo obligatorio"),
    region: Yup.string().when("continent", {
      is: "America",
      then: Yup.string().required("Campo obligatorio"),
    }),
    password: Yup.string()
      .min(6, "Debe contener al menos 6 caracteres")
      .required("Campo obligatorio"),
    replypassword: Yup.string()
      .required("Campo obligatorio")
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
  });

  const onSubmit = (values) => {
    const REGISTER_ENDPOINT = "https://goscrum-api.alkemy.org/auth/register";
    const teamID = !values.teamId ? crypto.randomUUID() : values.teamId;
    const body = {
      user: {
        userName: values.userName,
        password: values.password,
        email: values.email,
        teamID,
        role: values.rol,
        continent: values.continent,
        region: values.region,
      },
    };

    fetch(REGISTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(() => {
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Ahora puedes iniciar sesión",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 2000,
          timerProgressBar: true,
        });

        navigate("/");
      })
      .catch((e) => swalError(e.message));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};
