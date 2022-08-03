import * as Yup from "yup";
import { useFormik } from "formik";

const loginValidations = () => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });

  const onSubmit = () => {
    alert("logueado");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return formik;
};

export default loginValidations;
