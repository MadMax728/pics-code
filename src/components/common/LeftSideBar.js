import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { DashboardNav, DashboardFilter } from "./nav";
import propTypes from "prop-types";
import { SideBarSetting } from "./sidebar-setting";

class LeftSideBar extends Component {
  handleDashboardFilter = () => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} exact component={DashboardNav} />
        <Route path={routes.CAMPAIGN_ROUTE} exact component={DashboardNav} />
        <Route path={routes.MY_PROFILE_ROUTE} exact component={DashboardNav} />
        <Route
          path={routes.NOTIFICATIONS_ROUTE}
          exact={true}
          component={DashboardNav}
        />
        <Route path={routes.MESSAGES_ROUTE} exact component={DashboardNav} />
        <Route path={routes.EXPLORE_ROUTE} exact component={DashboardNav} />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          component={DashboardNav}
        />
        <Route path={routes.USER_ROUTE} exact component={DashboardNav} />
        <Route path={routes.PICS_ROUTE} exact component={DashboardNav} />
        <Route path={routes.NEWS_ROUTE} exact component={DashboardNav} />
        <Route path={routes.INFORMATION_ROUTE} exact component={DashboardNav} />
        <Route
          path={routes.ROOT_ROUTE}
          exact
          component={this.handleDashboardFilter}
        />

        {/* -------- Settings Routes --------- */}

        <Route
          path={routes.SETTINGS_PRIVACY_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_BUSSINESS_PROFILE_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_EDIT_PROFILE_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_BILLS_AND_RECEIPTS_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_DATA_DOWNLOAD_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_ADS_ROUTE}
          exact
          component={SideBarSetting}
        />
        <Route
          path={routes.SETTINGS_CAMPAIGN_ROUTE}
          exact
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
