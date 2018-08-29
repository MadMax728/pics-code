import { combineReducers } from "redux";
import { LoginReducer } from "./login";

const rootReducer = combineReducers({
  login: LoginReducer
});

//selectors
export const getIsAuth = ({
  login: {
    loginResponse: { auth_token }
  }
}) => ({ auth_token });
export default rootReducer;
