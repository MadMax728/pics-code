import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";

import {
  NewsFeedsPage,
  ExplorePage,
  ParticipantsPage,
  UsersPage,
  PicturesPage,
  OtherNewsFeedPage,
  OtherAboutPage,
  OtherSavedPage,
  OwnerNewsFeedPage,
  OwnerAboutPage,
  OwnerSavedPage,
  UserProfilePage,
  PrivacyPage,
  EditProfilePage,
  BusinessProfilePage,
  BillsAndReceiptsPage,
  DataDownloadPage,
  SettingCampaignPage,
  AdsPage,
  AdsStatisticsPage,
  SettingCampaignStatisticsPage,
  CampaignPage,
  InformationPage,
  ParticipantPage
} from "../../web/templates";

import { Campaign, Information, Participant } from "../../web/campaigns";

// Static Pages which is not requre to put in template folder
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
  LawEnforcementAgency,
  AboutUs,
  NetzDg,
  Cookies,
  LegalNotice
} from "../../web/information";
import { PageNotFound } from "../../web/page-not-found";

class HomeRoute extends Component {
  handleLanding = () => {
    return (
      <NewsFeedsPage
        handleModalInfoShow={this.props.handleModalInfoShow}
        handleModalShow={this.props.handleModalShow}
      />
    );
  };

  handleEditProfile = () => {
    return (
      <EditProfilePage
        handleModalInfoShow={this.props.handleModalInfoShow}
        image={this.props.image}
      />
    );
  };

  handlePageNotFound = () => {
    return <PageNotFound className={"page-not-found-wrapr padding72"} />;
  };

  handleSettingCampaign = () => {
    return (
      <SettingCampaignPage
        isBackOffice={false}
        handleModalInfoShow={this.props.handleModalInfoShow}
        handleModalShow={this.props.handleModalShow}
      />
    );
  };

  handleAds = () => {
    return <AdsPage isBackOffice={false} />;
  };

  handleOwnerNewsFeed = () => {
    return (
      <OwnerNewsFeedPage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleExplore = () => {
    return (
      <ExplorePage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleOwnerSaved = () => {
    return (
      <OwnerSavedPage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleOtherNewsFeed = () => {
    return (
      <OtherNewsFeedPage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleOtherSaved = () => {
    return (
      <OtherSavedPage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleInformation = match => {
    return (
      <InformationPage
        handleModalShow={this.props.handleModalShow}
        match={match.match}
      />
    );
  };

  handleSettingCampaignStatistics = match => {
    return <SettingCampaignStatisticsPage match={match.match} />;
  };

  handleParticipant = () => {
    return (
      <ParticipantPage
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  handleCampaign = match => {
    return (
      <CampaignPage
        type={match.match.params.type}
        handleModalInfoShow={this.props.handleModalInfoShow}
        handleModalShow={this.props.handleModalShow}
      />
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={routes.EXPLORE_ROUTE}
            component={this.handleExplore}
          />

          <Route
            exact
            path={routes.NEWS_FEED_ROUTE}
            component={this.handleOwnerNewsFeed}
          />
          <Route
            exact
            path={routes.SAVED_ROUTE}
            component={this.handleOwnerSaved}
          />
          <Route exact path={routes.ABOUT_ROUTE} component={OwnerAboutPage} />

          <Route
            exact
            path={routes.OTHER_NEWS_FEED_ROUTE}
            component={this.handleOtherNewsFeed}
          />
          <Route
            exact
            path={routes.OTHER_ABOUT_ROUTE}
            component={OtherAboutPage}
          />

          <Route
            exact
            path={routes.OTHER_SAVED_ROUTE}
            component={this.handleOtherSaved}
          />

          <Route
            exact
            path={routes.PARTICIPANTS_ROUTE}
            component={ParticipantsPage}
          />

          <Route exact path={routes.USERS_ROUTE} component={UsersPage} />

          <Route exact path={routes.PICS_ROUTE} component={PicturesPage} />

          <Route
            path={routes.ROOT_ROUTE}
            exact
            component={this.handleLanding}
          />

          <Route
            path={routes.CAMPAIGN_ROUTE}
            exact
            component={this.handleCampaign}
          />

          <Route
            exact
            path={routes.MY_PROFILE_ROUTE}
            component={UserProfilePage}
          />

          <Route
            exact
            path={routes.CAMPAIGN_INFORMATION_ROUTE}
            component={this.handleInformation}
          />

          <Route
            exact
            path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
            component={this.handleParticipant}
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
            component={PrivacyPage}
          />

          <Route
            exact
            path={routes.SETTINGS_BUSSINESS_PROFILE_ROUTE}
            component={BusinessProfilePage}
          />

          <Route
            exact
            path={routes.SETTINGS_BILLS_AND_RECEIPTS_ROUTE}
            component={BillsAndReceiptsPage}
          />

          <Route
            exact
            path={routes.SETTINGS_DATA_DOWNLOAD_ROUTE}
            component={DataDownloadPage}
          />

          <Route
            exact
            path={routes.SETTINGS_ADS_ROUTE}
            component={this.handleAds}
          />

          <Route
            exact
            path={routes.SETTINGS_ADS_STATISTICS_ROUTE}
            component={AdsStatisticsPage}
          />

          <Route
            exact
            path={routes.SETTINGS_CAMPAIGN_ROUTE}
            component={this.handleSettingCampaign}
          />

          <Route
            exact
            path={routes.SETTINGS_CAMPAIGN_STATISTICS_ROUTE}
            component={this.handleSettingCampaignStatistics}
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

          <Route exact path={routes.ABOUTUS_ROUTE} component={AboutUs} />
          <Route exact path={routes.SUPPORT_ROUTE} component={Support} />
          <Route
            exact
            path={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}
            component={DataProtectionAndPrivacyPolicy}
          />
          <Route
            exact
            path={routes.LEGAL_NOTICE_ROUTE}
            component={LegalNotice}
          />
          <Route
            exact
            path={routes.TERMS_CONDITIONS_ROUTE}
            component={GeneralTermsAndConditions}
          />
          <Route exact path={routes.NETZDG_ROUTE} component={NetzDg} />
          <Route exact path={routes.COOKIES_ROUTE} component={Cookies} />

          {window.location.pathname.indexOf("back-office") === -1 && (
            <Route exact path="/*" render={this.handlePageNotFound} />
          )}
        </Switch>
      </div>
    );
  }
}

HomeRoute.propTypes = {
  handleModalShow: propTypes.func,
  handleModalInfoShow: propTypes.func,
  image: propTypes.any
};

export default HomeRoute;
