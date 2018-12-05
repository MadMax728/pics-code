import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";
import registerData from "./registerReducer";
import resetPasswordData from "./forgotPasswordReducer";
import newPasswordData from "./setNewPasswordReducer";
import userDataByUsername from "./profileReducer";
import campaignData from "./campaignReducer";
import dashboardData from "./dashboardReducer";
import aboutData from "./aboutReducer";
import newsFeedData from "./newsFeedReducer";
import savedData from "./savedReducer";
import adData from "./adReducer";
import likeData from "./likeReducer";
import commentData from "./commentReducer";
import tags from "./tagsReducer";
import mediaData from "./mediaReducer";

const rootReducer = combineReducers({
  loginData,
  userData,
  registerData,
  resetPasswordData,
  newPasswordData,
  userDataByUsername,
  campaignData,
  dashboardData,
  aboutData,
  newsFeedData,
  savedData,
  adData,
  likeData,
  commentData,
  tags,
  mediaData
});

export default rootReducer;
