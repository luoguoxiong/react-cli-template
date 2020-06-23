import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./pages/router";

function RenderRouters({ rout }) {
  return rout.map((item) => {
    return (
      <Route
        path={item.link}
        exact
        key={item.link}
        render={() => <item.component />}
      />
    );
  });
}

export default () => {
  return (
    <Router>
      <RenderRouters rout={routes} />
    </Router>
  );
};
