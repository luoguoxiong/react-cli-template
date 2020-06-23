/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-22 16:07:36
 * @LastEditTime: 2020-06-22 21:04:14
 */

import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const toLori = () => {
    history.push("/goods");
  };
  return (
    <div onClick={toLori} className="leftRun">
      2323
    </div>
  );
};
