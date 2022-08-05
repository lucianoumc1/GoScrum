/* eslint-disable no-underscore-dangle */
import "./CardList.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import Card from "../Card";
import downArrowIcon from "../../assets/icons/down-arrow.png";

export default function CardList({ title, tasksList = [], classList = null }) {
  const [openList, setOpenList] = useState(true);

  const toggleOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleDelete = (id) => {};

  const handleEditStatus = (data) => {};

  const handleEditImportance = (data) => {};

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
          <li key={task._id}>
            <Card
              data={task}
              id={task._id}
              title={task.title}
              date={task.createdAt}
              author={task.user.userName}
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
      <ToastContainer />
    </div>
  );
}
