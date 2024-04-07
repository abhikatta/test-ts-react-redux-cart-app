import { legacy_createStore as createStore } from "redux";
import reducers from "./redux/reducers";

const store = createStore(reducers);
export default store;
