import React from "react";
import { withRouter } from "react-router-dom";
import { MainRoutes } from "../src/routes";

import "./App.css";
import CoWorkDesign from "screens/CoWorkDesign";

function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
      <CoWorkDesign />
    </div>
  );
}

const RouteWithAuth = withRouter(App);

export default RouteWithAuth;
