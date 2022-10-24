import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/actions/authAction";
import { authLoginService } from "../services/authServices";
import { swalError } from "../utils/swalError";

const loginValidations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });

  const onSubmit = (values) => {
    authLoginService(values)
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          dispatch(authLogin(data.result));
          navigate("/");
        } else {
          swalError("El nombre de usuario o la clave son incorrectas!");
        }
      })
      .catch((e) => {
        swalError(e.message);
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return formik;
};

export default loginValidations;
