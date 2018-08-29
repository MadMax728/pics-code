import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer } from "./login";

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer
});

//selectors
export const getIsAuth = ({
  login: {
    response: { auth_token }
  }
}) => ({ auth_token });
export default rootReducer;
