import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";

const rootReducer = combineReducers({
  loginData,
  userData
});

export default rootReducer;
