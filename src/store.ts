// applyMiddleware binds middleware to thunk
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./redux/reducers";
// ignore the warnings etc, this still works as expected,
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
