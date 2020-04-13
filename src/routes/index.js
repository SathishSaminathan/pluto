import React from "react";
import { Route, Switch } from "react-router-dom";
import GetStarted from "screens/GetStarted";
import Home from "screens/Home";


export const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={GetStarted} />
      {/* <ProtectedRoute path="/" component={Home} /> */}
    </Switch>
  );
};
