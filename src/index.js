import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { logger } from "./logging";
import { unregister } from "./registerServiceWorker";
import { configureStore } from "./store";

// Unregister the service worker from create-react-app
unregister();

// Always called on resolve of handler.
const defaultRender = () => {
  logger.initialize(
    process.env.REACT_APP_GA_TRACKING_ID,
    process.env.REACT_APP_GA_DEBUG,
    process.env.REACT_APP_GA_DIAGNOSTICS
  );
  logger.pageview(window.location.pathname + window.location.search);

  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

defaultRender();
