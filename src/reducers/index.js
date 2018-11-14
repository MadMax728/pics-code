import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";
import registerData from "./registerReducer";
import resetPasswordData from "./forgotPasswordReducer";
import newPasswordData from "./setNewPasswordReducer";
import userDataByUsername from "./profileReducer";
import campaignData from "./campaignReducer";

const rootReducer = combineReducers({
  loginData,
  userData,
  registerData,
  resetPasswordData,
  newPasswordData,
  userDataByUsername,
  campaignData
});

export default rootReducer;
