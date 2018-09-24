import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { DashboardNav, CampaignNav } from "../../nav-bar";
import {
  CampaignCompanyFilter,
  CampaignCreatorFilter,
  DashboardFilter,
  ParticipantsFilter
} from "../../filters";

import propTypes from "prop-types";
import {
  SideBarCampaignMenu,
  SideBarOtherMenu,
  SideBarSetting,
  SideBarOwnerMenu
} from "../../menu";

class LeftSideBar extends Component {
  handleDashboardFilter = () => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  handleCampaignCompanyFilter = () => {
    return <CampaignCompanyFilter handleApplyClick={this.props.getFilter} />;
  };

  handleCampaignCreatorFilter = () => {
    return <CampaignCreatorFilter handleApplyClick={this.props.getFilter} />;
  };

  handleParticipantsFilter = () => {
    return <ParticipantsFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} exact component={DashboardNav} />
        <Route path={routes.CAMPAIGN_ROUTE} exact component={CampaignNav} />
        <Route path={routes.CREATOR_ROUTE} exact component={CampaignNav} />
        <Route path={routes.COMPANY_ROUTE} exact component={CampaignNav} />
        <Route path={routes.MY_PROFILE_ROUTE} exact component={DashboardNav} />
        <Route
          path={routes.NOTIFICATIONS_ROUTE}
          exact
          component={DashboardNav}
        />
        <Route path={routes.EXPLORE_ROUTE} exact component={DashboardNav} />

        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          component={DashboardNav}
        />

        <Route path={routes.USERS_ROUTE} exact component={DashboardNav} />
        <Route path={routes.PICS_ROUTE} exact component={DashboardNav} />
        <Route path={routes.NEWS_ROUTE} exact component={DashboardNav} />

        {/* ....... Filters ....... */}

        <Route
          path={routes.ROOT_ROUTE}
          exact
          component={this.handleDashboardFilter}
        />

        <Route
          path={routes.COMPANY_ROUTE}
          exact
          component={this.handleCampaignCompanyFilter}
        />

        <Route
          path={routes.CREATOR_ROUTE}
          exact
          component={this.handleCampaignCreatorFilter}
        />
        {/* ....... Filters ....... */}

        {/* ...... Campaign Menu ...... */}

        <Route
          path={routes.CAMPAIGN_INFORMATION_ROUTE}
          exact
          component={SideBarCampaignMenu}
        />

        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          component={SideBarCampaignMenu}
        />

        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          component={this.handleParticipantsFilter}
        />

        {/* ...... Campaign Menu ...... */}

        {/* ...... Owner Menu ...... */}

        <Route
          path={routes.NEWS_FEED_ROUTE}
          exact
          component={SideBarOwnerMenu}
        />

        <Route path={routes.ABOUT_ROUTE} exact component={SideBarOwnerMenu} />

        <Route path={routes.SAVED_ROUTE} exact component={SideBarOwnerMenu} />

        {/* ...... Owner Menu ...... */}

        {/* ...... Other Menu ...... */}

        <Route
          path={routes.OTHER_NEWS_FEED_ROUTE}
          exact
          component={SideBarOtherMenu}
        />

        <Route
          path={routes.OTHER_ABOUT_ROUTE}
          exact
          component={SideBarOtherMenu}
        />

        {/* ...... Other Menu ...... */}

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
