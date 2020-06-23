/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-18 16:01:19
 * @LastEditTime: 2020-06-23 16:02:48
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "./store";
import "./global.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
