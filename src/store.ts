// applyMiddleware binds middleware to thunk
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import { thunk } from "redux-thunk";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
