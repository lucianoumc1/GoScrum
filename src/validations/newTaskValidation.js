/* eslint-disable no-use-before-define */
import * as Yup from "yup";
import { useFormik } from "formik";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { tasksFailure, getTasks } from "../store/actions/tasksActions";
import tasksService from "../services/tasksServices";
import { toastSuccessMessage } from "../utils/toastMessages";

const { createTasksService } = tasksService();

const newTaskValidation = () => {
  const dispatch = useDispatch();

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
    createTasksService(values)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200) {
          dispatch(getTasks());
          toastSuccessMessage("Nota creada con exito");
          formik.resetForm();
        }
      })
      .catch((e) => tasksFailure(e.message));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return formik;
};
export default newTaskValidation;
