import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";
import propTypes from "prop-types";

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

LeftSideBar.propTypes = {
  getFilter: propTypes.func
};

export default LeftSideBar;
