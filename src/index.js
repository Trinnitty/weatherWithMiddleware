import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import "./styles.scss";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
