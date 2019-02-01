import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { DashboardNav, CampaignNav } from "../nav-bar";
import {
  CampaignCompanyFilter,
  CampaignCreatorFilter,
  DashboardFilter,
  ParticipantsFilter,
  DashboardExploreFilter,
  DashboardUserFilter,
  DashboardPicsFilter,
  DashboardParticipantsFilter
} from "../filters";

import PropTypes from "prop-types";
import {
  SideBarCampaignMenu,
  SideBarCampaignMenuOnlyImage,
  SideBarOtherMenu,
  SideBarSetting,
  SideBarOwnerMenu,
  SideBarInformation,
  SideBarService
} from "../menu";

class LeftSideBar extends Component {
  render() {
    return (
      <div>
        <Route path={routes.ROOT_ROUTE} exact component={DashboardNav} />
        <Route path={routes.CAMPAIGN_ROUTE} exact component={CampaignNav} />
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
          path={routes.EXPLORE_ROUTE}
          exact
          component={this.handleExploreFilter}
        />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          component={this.handleDashboardParticipantsFilter}
        />
        <Route
          path={routes.USERS_ROUTE}
          exact
          component={this.handleUserFilter}
        />
        <Route
          path={routes.PICS_ROUTE}
          exact
          component={this.handlePicsFilter}
        />

        <Route
          path={`/campaign/company`}
          exact
          component={this.handleCampaignCompanyFilter}
        />

        <Route
          path={`/campaign/creator`}
          exact
          component={this.handleCampaignCreatorFilter}
        />
        {/* ....... Filters ....... */}

        {/* ...... Campaign Menu ...... */}

        <Route
          path={routes.CAMPAIGN_INFORMATION_ROUTE}
          exact
          component={SideBarCampaignMenuOnlyImage}
        />

        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          component={SideBarCampaignMenuOnlyImage}
        />

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

        <Route
          path={routes.OTHER_SAVED_ROUTE}
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

        <Route
          path={routes.SETTINGS_CAMPAIGN_STATISTICS_ROUTE}
          exact
          component={SideBarSetting}
        />

        <Route
          path={routes.SETTINGS_ADS_STATISTICS_ROUTE}
          exact
          component={SideBarSetting}
        />

        {/* letf side bar information */}

        <Route
          path={routes.INFORMATION_OUR_MISSION_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_IMPRINT_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_CAMPAIGN_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_CAMPAIGN_POLICY_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_ADVERTISING_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_ADVERTISING_POLICY_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_GENERAL_TERMS_AND_CONDITIONS_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_PLATFORM_POLICY_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_CANCELLATION_POLICY_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.INFORMATION_TERMS_OF_USE_ROUTE}
          exact
          render={this.renderInformationService}
        />

        {/* letf side bar information */}

        {/* letf side bar service */}

        <Route
          path={routes.SERVICE_SUPPORT_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.SERVICE_VERIFICATION_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.SERVICE_FEEDBACK_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.SERVICE_REPORTED_CONTENT_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.SERVICE_DELETE_ACCOUNT_ROUTE}
          exact
          render={this.renderInformationService}
        />
        <Route
          path={routes.SERVICE_LAW_ENFORCEMENT_AGENCY_ROUTE}
          exact
          render={this.renderInformationService}
        />

        {/* letf side bar service */}
      </div>
    );
  }

  handleDashboardFilter = () => {
    return <DashboardFilter handleApplyClick={this.props.getFilter} />;
  };

  handleExploreFilter = () => {
    return <DashboardExploreFilter handleApplyClick={this.props.getFilter} />;
  };

  handlePicsFilter = () => {
    return <DashboardPicsFilter handleApplyClick={this.props.getFilter} />;
  };

  handleUserFilter = () => {
    return <DashboardUserFilter handleApplyClick={this.props.getFilter} />;
  };

  handleDashboardParticipantsFilter = () => {
    return (
      <DashboardParticipantsFilter handleApplyClick={this.props.getFilter} />
    );
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

  renderInformationService = () => {
    return (
      <div>
        <SideBarInformation />
        <SideBarService />
      </div>
    );
  };
}

LeftSideBar.propTypes = {
  getFilter: PropTypes.func
};

export default LeftSideBar;
