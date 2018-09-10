import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";
import propTypes from "prop-types";
import { SideBarSetting } from "./sidebar-setting";

class LeftSideBar extends Component {
  handleDashboardFilter = getFilter => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} exact={true} component={DashboardNav} />
        <Route
          path={routes.CAMPAIGN_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.MY_PROFILE_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.NOTIFICATIONS_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.MESSAGES_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.EXPLORE_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route path={routes.USER_ROUTE} exact={true} component={DashboardNav} />
        <Route path={routes.PICS_ROUTE} exact={true} component={DashboardNav} />
        <Route path={routes.NEWS_ROUTE} exact={true} component={DashboardNav} />
        <Route
          path={routes.INFORMATION_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route
          path={routes.ROOT_ROUTE}
          exact={true}
          component={this.handleDashboardFilter}
        />
        <Route
          path={routes.PRIVACY_ROUTE}
          exact={true}
          component={SideBarSetting}
        />
      </div>
    );
  }
}

LeftSideBar.propTypes = {
  getFilter: propTypes.func
};

export default LeftSideBar;
