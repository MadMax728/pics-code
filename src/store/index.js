import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const configureStore = () => {
  const middleware = [thunk];
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
};
