import * as types from "../actions/types";

const initialState = {
  loading: false,
  response: {},
  error: ""
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, { loading: true });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        response: action.data
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        response: action.error
      });
    default:
      return state;
  }
};

//ryt register reducer
const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return Object.assign({}, state, { loading: true });
    case types.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        response: action.data
      });
    case types.REGISTER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        response: action.error
      });
    default:
      return state;
  }
};

//resetEmail
const ResetEmail = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_EMAIL_REQUEST:
      return Object.assign({}, state, { loading: true });
    case types.RESET_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        response: action.data
      });
    case types.RESET_EMAIL_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        response: action.error
      });
    default:
      return state;
  }
};
export { LoginReducer, RegisterReducer, ResetEmail };
