/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-18 16:01:19
 * @LastEditTime: 2020-06-22 19:44:53
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "./store";
import "./global.css";
import "./global.less";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
