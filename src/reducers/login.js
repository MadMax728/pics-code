import * as types from "../actions/types";

const initialState = {
  loading: false,
  loginResponse: {},
  error: ""
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, { loading: true });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loginResponse: action.data
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        loginResponse: action.error
      });
    default:
      return state;
  }
};

export { LoginReducer };
