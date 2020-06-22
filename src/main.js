import React from "react";
import { render } from "react-dom";
import Apps from "./test";
import styles from "./index.less";
import "./global.css";
import "./global.less";

function App() {
  return (
    <div className={styles.box}>
      <Apps />
    </div>
  );
}

render(<App />, document.getElementById("app"));
