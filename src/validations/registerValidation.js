import { useFormik } from "formik";
import * as Yup from "yup";

export const registerValidation = () => {
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

  const onSubmit = () => {
    alert("registrado");
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};
