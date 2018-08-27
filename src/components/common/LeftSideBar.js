import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { DashboardNav } from "./nav";

const LeftSideBar = () => {
  return (
    <div>
      <Route path={routes.ROOT_ROUTE} component={DashboardNav} />
    </div>
  );
};

export default LeftSideBar;
