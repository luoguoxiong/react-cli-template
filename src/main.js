/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-24 12:25:18
 * @LastEditTime: 2020-06-24 17:52:46
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import App from "./app";
import "@/global.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
