import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
  }

  handleDashboardFilter = getFilter => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} component={DashboardNav} />
        <Route
          path={routes.ROOT_ROUTE}
          exact={true}
          component={this.handleDashboardFilter}
        />
      </div>
    );
  }
}

export default LeftSideBar;
