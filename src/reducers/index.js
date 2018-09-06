import { combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  ResetEmail,
  ResetPassword
} from "./login";

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  resetEmail: ResetEmail,
  resetPassword: ResetPassword
});

//selectors
export const getIsAuth = ({
  login: {
    response: { auth_token }
  }
}) => ({ auth_token });

export const getResendEmail = ({ resetEmail: { payload } }) => payload;
export const getRegisterLoading = ({ register: { loading } }) => loading;

export const getLoginLoading = ({ login: { loading } }) => loading;

export default rootReducer;
