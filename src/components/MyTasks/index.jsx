import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../store/actions/tasksActions";
import useFilterTasks from "../../hooks/useFilterTasks";
import { filterByTitle, filterByImportance } from "../../utils/tasksFilters";

import Portal from "../Portal";
import NewTask from "../NewTask";
import MyTaskHeader from "../MyTaskHeader";
import TaskBoard from "../TaskBoard";
import OpenModalButton from "../OpenModalButton";

export default function MyTasks() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [tasksFilters, setTasksFilters] = useState({
    filterByCurrentUser: false,
    filterByTitle: "",
    filterByImportance: "",
  });

  const { tasks } = useSelector((state) => state.tasksReducer);

  useEffect(() => {
    dispatch(getTasks(tasksFilters.filterByCurrentUser));
  }, [dispatch, tasksFilters]);

  useEffect(() => {
    if (tasks.length) {
      setTasksList(tasks);
    }
  }, [tasks]);

  let filterTaskList = [];
  if (tasksFilters.filterByTitle.length) {
    filterTaskList = filterByTitle(tasksList, tasksFilters.filterByTitle);

    if (tasksFilters.filterByImportance.length) {
      filterTaskList = filterByImportance(
        filterTaskList,
        tasksFilters.filterByImportance
      );
    }
  } else if (tasksFilters.filterByImportance.length) {
    filterTaskList = filterByImportance(
      tasksList,
      tasksFilters.filterByImportance
    );
  } else {
    filterTaskList = tasksList;
  }

  filterTaskList = useFilterTasks(filterTaskList);

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <section className="w-full h-full bg-[#e5e5e571] p-2 rounded-lg shadow-md md:w-2/3 flex flex-col relative">
      {openModal && (
        <Portal>
          <NewTask />
        </Portal>
      )}
      <MyTaskHeader
        setTasksFilters={setTasksFilters}
        tasksFilters={tasksFilters}
      />

      <TaskBoard renderTasks={filterTaskList} />

      <OpenModalButton
        className="absolute bottom-4 right-4 z-50 md:hidden"
        handleClick={handleOpenModal}
        rotateIcon={openModal}
      />
    </section>
  );
}
