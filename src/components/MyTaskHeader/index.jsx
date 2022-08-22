import { useState } from "react";
import TextField from "../TextField";
import SelectField from "../SelectField";

export default function MyTaskHeader({
  className = null,
  tasksFilters,
  setTasksFilters,
}) {
  const [userFilter, setUserFilter] = useState(false);

  const handleChangeTitleFilter = (ev) => {
    setTasksFilters({ ...tasksFilters, filterByTitle: ev.currentTarget.value });
  };

  const handleChangeImportanceFilter = (ev) => {
    setTasksFilters({
      ...tasksFilters,
      filterByImportance: ev.currentTarget.value,
    });
  };

  const handleDisabledUserFilter = () => {
    setUserFilter(false);
    setTasksFilters({
      ...tasksFilters,
      filterByCurrentUser: false,
    });
  };

  const handleEnableUserFilter = () => {
    setUserFilter(true);
    setTasksFilters({
      ...tasksFilters,
      filterByCurrentUser: true,
    });
  };
  return (
    <div className={`mb-2 w-full ${className}`}>
      <h3 className="text-2xl font-semibold mb-2">Mis tareas</h3>
      <form className="flex items-center justify-start flex-wrap gap-4">
        <div className="flex gap-4 w-max ">
          <label htmlFor="all">
            <input
              id="all"
              type="radio"
              name="tasks"
              className="mr-2 "
              checked={!userFilter}
              onChange={handleDisabledUserFilter}
            />
            Todas
          </label>
          <label htmlFor="mytask">
            <input
              id="mytask"
              type="radio"
              name="tasks"
              className="mr-2"
              checked={userFilter}
              onChange={handleEnableUserFilter}
            />
            Mis tareas
          </label>
        </div>
        <div className="flex gap-2 flex-wrap flex-auto ">
          <TextField
            placeholder="Buscar por título..."
            className="flex-auto"
            onChange={handleChangeTitleFilter}
          />
          <SelectField
            type="text"
            className="flex-auto"
            options={["", "Buscar por importancia...", "LOW", "MEDIUM", "HIGH"]}
            onChange={handleChangeImportanceFilter}
          >
            <option value="">Buscar por importancia...</option>
            <option value="LOW">Baja</option>
            <option value="MEDIUM">Media</option>
            <option value="HIGH">Alta</option>
          </SelectField>
        </div>
      </form>
    </div>
  );
}
