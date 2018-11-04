import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";
import registerData from "./registerReducer";
import resetPasswordData from "./forgotPasswordReducer";
import newPasswordData from "./setNewPasswordReducer";

const rootReducer = combineReducers({
  loginData,
  userData,
  registerData,
  resetPasswordData,
  newPasswordData
});

export default rootReducer;
