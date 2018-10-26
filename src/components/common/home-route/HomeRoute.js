import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import { OtherNewsFeed, OtherAbout } from "../../web/other";
import { OwnerNewsFeed, OwnerAbout, OwnerSaved } from "../../web/owner";
import {
  Landing,
  Users,
  Explore,
  Participants,
  Pictures
} from "../../web/dashboard";
import {
  UserProfile,
  Privacy,
  EditProfile,
  BusinessProfile,
  BillsAndReceipts,
  DataDownload,
  SettingCampaign,
  Ads,
  AdsStatistics,
  SettingCampaignStatistics
} from "../../web/user";

import {
  Campaign,
  Company,
  Creator,
  Information,
  Participant
} from "../../web/campaigns";

import {
  CampaignsInformation,
  Advertising,
  OurMission,
  Imprint,
  CampaignPolicy,
  AdvertisingPolicy,
  GeneralTermsAndConditions,
  DataProtectionAndPrivacyPolicy,
  PlatformPolicy,
  CancellationPolicy,
  TermsOfUse,
  Support,
  Verification,
  Feedback,
  ReportedContent,
  DeleteAccount,
  LawEnforcementAgency
} from "../../web/information";
import { PageNotFound } from "../../web/page-not-found";

class HomeRoute extends Component {
  handleLanding = () => {
    return <Landing handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleEditProfile = () => {
    return <EditProfile handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handlePageNotFound = () => {
    return <PageNotFound className={"page-not-found-wrapr padding72"} />;
  };

  handleSettingCampaign = () => {
    return <SettingCampaign isBackOffice={false} />;
  };

  handleAds = () => {
    return <Ads isBackOffice={false} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.EXPLORE_ROUTE} component={Explore} />

          <Route
            exact
            path={routes.NEWS_FEED_ROUTE}
            component={OwnerNewsFeed}
          />
          <Route exact path={routes.SAVED_ROUTE} component={OwnerSaved} />
          <Route exact path={routes.ABOUT_ROUTE} component={OwnerAbout} />

          <Route
            exact
            path={routes.OTHER_NEWS_FEED_ROUTE}
            component={OtherNewsFeed}
          />
          <Route exact path={routes.OTHER_ABOUT_ROUTE} component={OtherAbout} />

          <Route
            exact
            path={routes.PARTICIPANTS_ROUTE}
            component={Participants}
          />

          <Route exact path={routes.USERS_ROUTE} component={Users} />

          <Route exact path={routes.PICS_ROUTE} component={Pictures} />

          <Route
            path={routes.ROOT_ROUTE}
            exact
            component={this.handleLanding}
          />

          <Route path={routes.COMPANY_ROUTE} exact component={Company} />

          <Route path={routes.CREATOR_ROUTE} exact component={Creator} />

          <Route exact path={routes.CAMPAIGN_ROUTE} component={Campaign} />
          <Route exact path={routes.MY_PROFILE_ROUTE} component={UserProfile} />

          <Route
            exact
            path={routes.CAMPAIGN_INFORMATION_ROUTE}
            component={Information}
          />

          <Route
            exact
            path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
            component={Participant}
          />

          {/* -------- Settings Routes --------- */}
          <Route
            exact
            path={routes.SETTINGS_EDIT_PROFILE_ROUTE}
            component={this.handleEditProfile}
          />

          <Route
            exact
            path={routes.SETTINGS_PRIVACY_ROUTE}
            component={Privacy}
          />

          <Route
            exact
            path={routes.SETTINGS_BUSSINESS_PROFILE_ROUTE}
            component={BusinessProfile}
          />

          <Route
            exact
            path={routes.SETTINGS_BILLS_AND_RECEIPTS_ROUTE}
            component={BillsAndReceipts}
          />

          <Route
            exact
            path={routes.SETTINGS_DATA_DOWNLOAD_ROUTE}
            component={DataDownload}
          />

          <Route
            exact
            path={routes.SETTINGS_ADS_ROUTE}
            component={this.handleAds}
          />

          <Route
            exact
            path={routes.SETTINGS_ADS_STATISTICS_ROUTE}
            component={AdsStatistics}
          />

          <Route
            exact
            path={routes.SETTINGS_CAMPAIGN_ROUTE}
            component={this.handleSettingCampaign}
          />

          <Route
            exact
            path={routes.SETTINGS_CAMPAIGN_STATISTICS_ROUTE}
            component={SettingCampaignStatistics}
          />
          {/* -------- Settings Routes --------- */}

          {/* -------- Information Routes --------- */}

          <Route
            exact
            path={routes.INFORMATION_OUR_MISSION_ROUTE}
            component={OurMission}
          />

          <Route
            exact
            path={routes.INFORMATION_IMPRINT_ROUTE}
            component={Imprint}
          />

          <Route
            exact
            path={routes.INFORMATION_CAMPAIGN_ROUTE}
            component={CampaignsInformation}
          />

          <Route
            exact
            path={routes.INFORMATION_CAMPAIGN_POLICY_ROUTE}
            component={CampaignPolicy}
          />

          <Route
            exact
            path={routes.INFORMATION_ADVERTISING_ROUTE}
            component={Advertising}
          />

          <Route
            exact
            path={routes.INFORMATION_ADVERTISING_POLICY_ROUTE}
            component={AdvertisingPolicy}
          />

          <Route
            exact
            path={routes.INFORMATION_GENERAL_TERMS_AND_CONDITIONS_ROUTE}
            component={GeneralTermsAndConditions}
          />

          <Route
            exact
            path={routes.INFORMATION_DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}
            component={DataProtectionAndPrivacyPolicy}
          />

          <Route
            exact
            path={routes.INFORMATION_PLATFORM_POLICY_ROUTE}
            component={PlatformPolicy}
          />

          <Route
            exact
            path={routes.INFORMATION_CANCELLATION_POLICY_ROUTE}
            component={CancellationPolicy}
          />

          <Route
            exact
            path={routes.INFORMATION_TERMS_OF_USE_ROUTE}
            component={TermsOfUse}
          />

          <Route
            exact
            path={routes.SERVICE_SUPPORT_ROUTE}
            component={Support}
          />

          <Route
            exact
            path={routes.SERVICE_VERIFICATION_ROUTE}
            component={Verification}
          />

          <Route
            exact
            path={routes.SERVICE_FEEDBACK_ROUTE}
            component={Feedback}
          />

          <Route
            exact
            path={routes.SERVICE_REPORTED_CONTENT_ROUTE}
            component={ReportedContent}
          />

          <Route
            exact
            path={routes.SERVICE_DELETE_ACCOUNT_ROUTE}
            component={DeleteAccount}
          />

          <Route
            exact
            path={routes.SERVICE_LAW_ENFORCEMENT_AGENCY_ROUTE}
            component={LawEnforcementAgency}
          />
          {window.location.pathname.indexOf("back-office") === -1 && (
            <Route exact path="/*" render={this.handlePageNotFound} />
          )}

          {/* -------- Information Routes --------- */}
        </Switch>
      </div>
    );
  }
}

HomeRoute.propTypes = {
  handleModalInfoShow: propTypes.func.isRequired
};

export default HomeRoute;
