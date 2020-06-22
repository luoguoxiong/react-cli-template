/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-18 16:01:19
 * @LastEditTime: 2020-06-22 18:03:15
 */

import React from "react";
import { render } from "react-dom";
import "./global.css";
import "./global.less";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
