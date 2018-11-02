import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";
import registerData from "./registerReducer";

const rootReducer = combineReducers({
  loginData,
  userData,
  registerData
});

export default rootReducer;
