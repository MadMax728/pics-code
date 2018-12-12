import { combineReducers } from "redux";
import loginData from "./loginReducer";
import userData from "./socialReducer";
import registerData from "./registerReducer";
import resetPasswordData from "./forgotPasswordReducer";
import newPasswordData from "./setNewPasswordReducer";
import userDataByUsername from "./profileReducer";
import profilePrivacyData from "./privacyReducer";
import campaignData from "./campaignReducer";
import dashboardData from "./dashboardReducer";
import aboutData from "./aboutReducer";
import newsFeedData from "./newsFeedReducer";
import savedData from "./savedReducer";
import adData from "./adReducer";
import likeData from "./likeReducer";
import commentData from "./commentReducer";
import tags from "./tagsReducer";
import usersData from "./usersReducers";
import selectData from "./selectReducer";
import mediaData from "./mediaReducer";
import backOfficeDashboardData from "./backOfficeDashboardReducer";
import cmsManagementData from "./cmsManagementReducer";
import adminData from "./adminReducer";
import verificationData from "./verificationReducer";
import voucherData from "./voucherReducer";
import reviewData from "./reviewReducer";

const rootReducer = combineReducers({
  loginData,
  userData,
  registerData,
  resetPasswordData,
  newPasswordData,
  userDataByUsername,
  profilePrivacyData,
  campaignData,
  dashboardData,
  aboutData,
  newsFeedData,
  savedData,
  adData,
  likeData,
  commentData,
  tags,
  usersData,
  selectData,
  mediaData,
  backOfficeDashboardData,
  cmsManagementData,
  adminData,
  verificationData,
  voucherData,
  reviewData
});

export default rootReducer;
