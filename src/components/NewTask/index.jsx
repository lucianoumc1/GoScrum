import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newTaskValidation from "../../validations/newTaskValidation";

import TextField from "../TextField";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";
import PrimaryButton from "../PrimaryButton";

export default function NewTask({ className = null }) {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    newTaskValidation();

  return (
    <section className={`h-full p-2 ${className}`}>
      <h3 className="text-2xl font-semibold mb-3">Crear tarea</h3>
      <h5>Crea tus tareas</h5>
      <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
        <TextField
          placeholder="Título"
          type="text"
          name="title"
          errors={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1"
        />

        <SelectField
          type="text"
          name="status"
          errors={touched.status && errors.status}
          value={values.status}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1"
        >
          <option value="">Seleccionar estado...</option>
          <option value="NEW">Nueva</option>
          <option value="IN PROGRESS">En proceso</option>
          <option value="FINISHED">Finalizada</option>
        </SelectField>

        <SelectField
          type="text"
          name="importance"
          errors={touched.importance && errors.importance}
          value={values.importance}
          onChange={handleChange}
          onBlur={handleBlur}
          options={["HIGH", "MEDIUM", "LOW"]}
          className="flex-1"
        >
          <option value="">Seleccionar importancia...</option>
          <option value="LOW">Baja</option>
          <option value="MEDIUM">Media</option>
          <option value="HIGH">Alta</option>
        </SelectField>

        <TextAreaField
          placeholder="Descripcíon"
          type="text"
          name="description"
          errors={touched.description && errors.description}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full"
        />

        <PrimaryButton />
      </form>
      <ToastContainer />
    </section>
  );
}
