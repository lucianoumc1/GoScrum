import types from "../types";

const initialState = {
  loading: false,
  tasks: [],
  error: "",
};

// eslint-disable-next-line default-param-last
export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload,
      };

    case types.TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
