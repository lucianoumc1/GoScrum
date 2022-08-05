import store from "../store";
import types from "../types";
import tasksService from "../../services/tasksServices";

const { getTasksService } = tasksService();

export const tasksRequest = () => ({
  type: types.TASKS_REQUEST,
});
export const tasksSuccess = (data) => ({
  type: types.TASKS_SUCCESS,
  payload: data,
});
export const tasksFailure = (error) => ({
  type: types.TASKS_FAILURE,
  payload: error,
});

export const getTasks = () => (dispatch) => {
  const { tasks } = store.getState().tasksReducer;

  if (!tasks.length) {
    dispatch(tasksRequest());
  }
  getTasksService()
    .then((res) => res.json())
    .then((data) => {
      dispatch(tasksSuccess(data.result));
    })
    .catch((e) => dispatch(tasksFailure(e)));
};
