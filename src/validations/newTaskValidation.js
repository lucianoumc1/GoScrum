/* eslint-disable no-use-before-define */
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { tasksFailure, getTasks } from "../store/actions/tasksActions";
// import { createTasksService } from "../services/tasksServices";
import tasksService from "../services/tasksServices";

const { createTasksService } = tasksService();

const newTaskValidation = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authReducer);

  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Campo obligatorio"),
    status: Yup.string().required("Campo obligatorio"),
    importance: Yup.string().required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
  });

  const onSubmit = (values) => {
    createTasksService(values, token)
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          dispatch(getTasks(token));
          toast.success("Nota creada con exito", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          formik.resetForm();
        }
      })
      .catch((e) => tasksFailure(e.message));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return formik;
};
export default newTaskValidation;
