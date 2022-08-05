const useFilterTasks = (tasksList) => {
  const statusList = ["NEW", "IN PROGRESS", "FINISHED"];

  const filterByStatus = (list, status) => {
    const listFiltered = list.filter((item) => item?.status === status);
    return listFiltered;
  };

  const tasksFilteredByStatus = statusList.map((status) => {
    const result = filterByStatus(tasksList, status);
    return result;
  });

  return tasksFilteredByStatus;
};

export default useFilterTasks;
