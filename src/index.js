import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { configureStore } from "./store";

// Unregister the service worker from create-react-app
unregister();

// Always called on resolve of handler.
const defaultRender = () => {
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
