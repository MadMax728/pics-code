import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";

const LeftSideBar = () => {
  return (
    <div>
      <Route path={routes.ROOT_ROUTE} component={DashboardNav} />
      <Route exact path={routes.ROOT_ROUTE} component={DashboardFilter} />
    </div>
  );
};

export default LeftSideBar;
