import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const toLori = () => {
    history.push("/goods");
  };
  return <div onClick={toLori}>2323</div>;
};
