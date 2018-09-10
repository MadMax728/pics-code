import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers";
import { callApi } from "../coustomMidlewares/callApi";
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const middleware = [thunk, callApi];

export const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
};
