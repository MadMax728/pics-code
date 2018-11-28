import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const enhancer = applyMiddleware(thunk)

//https://stackoverflow.com/questions/51503198/error-error-error-error-you-may-not-call-store-getstate-while-the-reducer

export const configureStore = () => {
  return createStore(rootReducer, enhancer);
};
