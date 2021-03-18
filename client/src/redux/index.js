import { combineReducers } from "redux";
import loginReducer from "./loginAction";

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
