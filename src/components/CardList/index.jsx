/* eslint-disable no-underscore-dangle */
import "./CardList.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import tasksService from "../../services/tasksServices";

import { getTasks, tasksFailure } from "../../store/actions/tasksActions";

import Card from "../Card";
import downArrowIcon from "../../assets/icons/down-arrow.png";
import {
  toastSuccessMessage,
  toastErrorMessage,
} from "../../utils/toastMessages";

export default function CardList({ title, tasksList = [], classList = null }) {
  const [openList, setOpenList] = useState(true);

  const {
    deleteTaskService,
    editTaskStatusService,
    editTaskImportanceService,
  } = tasksService();

  const dispatch = useDispatch();

  const toggleOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleDelete = (id) => {
    deleteTaskService(id)
      .then((res) => {
        if (res.status === 401) {
          toastErrorMessage("Permisos insuficientes");
          return;
        }
        toastSuccessMessage("Nota eliminada");
        dispatch(getTasks());
      })
      .catch((e) => tasksFailure(e.message));
  };

  const handleEditStatus = (data) => {
    editTaskStatusService(data)
      .then((res) => {
        if (res.status === 401) {
          toastErrorMessage("Permisos insuficientes");
          return;
        }
        dispatch(getTasks());
      })
      .catch((e) => tasksFailure(e.message));
  };

  const handleEditImportance = (data) => {
    editTaskImportanceService(data)
      .then((res) => {
        if (res.status === 401) {
          toastErrorMessage("Permisos insuficientes");
          return;
        }
        dispatch(getTasks());
      })
      .catch((e) => tasksFailure(e.message));
  };

  return (
    <div
      className={`bg-white p-3 rounded-md overflow-hidden min-h-[48px] min-w-[280px] ${
        !openList ? "h-0" : ""
      } ${classList}`}
    >
      <button
        type="button"
        onClick={toggleOpenList}
        className="mb-1 outline-none text-2xl font-semibold"
      >
        {title}
        <img
          src={downArrowIcon}
          alt="arrow-down"
          className={`h-full inline-block ${openList ? "rotate-180" : ""}`}
        />
      </button>

      <ul className="w-full h-full overflow-y-auto pb-2 xl:pb-6 fancy-scrollbar pr-2">
        {!tasksList.length && "No hay tareas por el momento..."}
        {tasksList.map((task) => (
          <li key={task.id}>
            <Card
              data={task}
              id={task.id}
              title={task.title}
              date={task.createdAt}
              author={task.created_by.name}
              status={task.status}
              importance={task.importance}
              desc={task.description}
              handleDelete={handleDelete}
              handleEditStatus={handleEditStatus}
              handleEditImportance={handleEditImportance}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
