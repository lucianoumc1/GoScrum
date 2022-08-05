import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
