import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";

const LeftSideBar = ({ getFilter }) => {
  return (
    <div>
      <Route path={routes.ROOT_ROUTE} component={DashboardNav} />
      <Route
        path={routes.ROOT_ROUTE}
        component={() => <DashboardFilter handleApplyClick={getFilter} />}
      />
    </div>
  );
};

export default LeftSideBar;
