import React from "react";
import { withRouter } from "react-router-dom";
import { MainRoutes } from "../src/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

const RouteWithAuth = withRouter(App);

export default RouteWithAuth;
