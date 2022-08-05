import { combineReducers } from "redux";

import { tasksReducer } from "./tasksReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  tasksReducer,
  authReducer,
});

export default rootReducer;
