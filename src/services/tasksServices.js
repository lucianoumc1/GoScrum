/* eslint-disable no-underscore-dangle */
import store from "../store/store";

export default function tasksServices() {
  const TASKS_ENDPOINT = "https://goscrum-api.alkemy.org/task/";

  const getTasksService = () => {
    const { token } = store.getState().authReducer;

    return fetch(TASKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  const createTasksService = (newTask) => {
    const { token } = store.getState().authReducer;

    return fetch(TASKS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: newTask,
      }),
    });
  };

  const deleteTaskService = (id) => {
    const { token } = store.getState().authReducer;

    return fetch(`${TASKS_ENDPOINT}${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  const editTaskStatusService = (data) => {
    const { token } = store.getState().authReducer;

    const statusList = ["NEW", "IN PROGRESS", "FINISHED"];
    const currentStatusIndex = statusList.findIndex(
      (item) => item === data.status
    );
    const nextStatusIndex =
      statusList.length - 1 <= currentStatusIndex ? 0 : currentStatusIndex + 1;

    return fetch(`${TASKS_ENDPOINT}${data._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: {
          title: data.title,
          importance: data.importance,
          status: statusList[nextStatusIndex],
          description: data.description,
        },
      }),
    });
  };

  const editTaskImportanceService = (data) => {
    const { token } = store.getState().authReducer;

    const importanceList = ["LOW", "MEDIUM", "HIGH"];
    const currentImportanceIndex = importanceList.findIndex(
      (item) => item === data.importance
    );
    const nextImportanceIndex =
      importanceList.length - 1 <= currentImportanceIndex
        ? 0
        : currentImportanceIndex + 1;

    return fetch(`${TASKS_ENDPOINT}${data._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: {
          title: data.title,
          importance: importanceList[nextImportanceIndex],
          status: data.status,
          description: data.description,
        },
      }),
    });
  };

  return {
    editTaskImportanceService,
    editTaskStatusService,
    deleteTaskService,
    createTasksService,
    getTasksService,
  };
}
