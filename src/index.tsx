import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { App } from "./components/App";
import { PersistGate } from "redux-persist/integration/react";
import getStoreAndPersistor from "./configureStore";
import "./scss/variables.scss";
import "./scss/bootstrapTheming.scss";
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStoreAndPersistor().store}>
      <PersistGate loading={null} persistor={getStoreAndPersistor().persistor}>
        <BrowserRouter>
          <Route path="/:filter?">
            <App />
          </Route>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
