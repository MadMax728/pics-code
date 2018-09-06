import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";
import propTypes from "prop-types";

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      name: "",
      data: {}
    };
  }

  handleDashboardFilter = getFilter => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    const { getFilter } = this.props;
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} component={DashboardNav} />
        <Route
          path={routes.ROOT_ROUTE}
          exact={routes.ROOT_ROUTE}
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
