import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import {
  Landing,
  Campaigns,
  CMSManagement,
  AddAdmin,
  AddVerification,
  AddVoucher,
  DataDownload,
  Ads,
  ImagesBO,
  VideosBO,
  ReportedCampaigns,
  Pics,
  ReportedAds,
  Comments,
  Users,
  CreateCMSManagement
} from "../../back-office";

import * as settings from "../../web/user";

class BackOfficeHomeRoute extends Component {
  handleLanding = () => {
    return <Landing handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleAds = () => {
    return <Ads handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleImageBO = () => {
    return <ImagesBO handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleSettingCampaign = () => {
    return <settings.SettingCampaign isBackOffice />;
  };

  handleAds = () => {
    return <settings.Ads isBackOffice />;
  };

  render() {
    return (
      <div>
        <Switch>
          {/* backoffice routes */}
          <Route
            path={routes.BACK_OFFICE_ROOT_ROUTE}
            exact
            component={this.handleLanding}
          />

          <Route
            path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
            exact
            component={CMSManagement}
          />

          <Route
            path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
            exact
            component={CreateCMSManagement}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
            exact
            component={AddAdmin}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
            exact
            component={AddVerification}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
            exact
            component={AddVoucher}
          />

          <Route
            path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
            exact
            component={DataDownload}
          />

          <Route
            path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
            exact
            component={Campaigns}
          />

          <Route
            path={routes.BACK_OFFICE_ADS_ROUTE}
            exact
            component={this.handleAds}
          />

          {/* reported routes */}
          <Route
            path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
            exact
            component={this.handleImageBO}
          />

          <Route
            path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
            exact
            component={VideosBO}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
            exact
            component={ReportedCampaigns}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
            exact
            component={Pics}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
            exact
            component={ReportedAds}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
            exact
            component={Comments}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
            exact
            component={Users}
          />

          {/* back-office settings route */}

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_EDIT_PROFILE_ROUTE}
            component={settings.EditProfile}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_PRIVACY_ROUTE}
            component={settings.Privacy}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_BUSSINESS_PROFILE_ROUTE}
            component={settings.BusinessProfile}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_BILLS_AND_RECEIPTS_ROUTE}
            component={settings.BillsAndReceipts}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_DATA_DOWNLOAD_ROUTE}
            component={settings.DataDownload}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_ADS_ROUTE}
            component={this.handleAds}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_ADS_STATISTICS_ROUTE}
            component={settings.AdsStatistics}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_CAMPAIGN_ROUTE}
            component={this.handleSettingCampaign}
          />

          <Route
            exact
            path={routes.BACK_OFFICE_SETTINGS_CAMPAIGN_STATISTICS_ROUTE}
            component={settings.SettingCampaignStatistics}
          />
        </Switch>
      </div>
    );
  }
}

BackOfficeHomeRoute.propTypes = {
  handleModalInfoShow: propTypes.func.isRequired
};

export default BackOfficeHomeRoute;
