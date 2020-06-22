import React from "react";
import { render } from "react-dom";
import styles from "./index.less";
import "./global.css";
import "./global.less";
function App() {
  return <div className={styles.box}>23232</div>;
}

render(<App />, document.getElementById("app"));
