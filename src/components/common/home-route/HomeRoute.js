import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";

import {
  NewsPage,
  NewsFeedPage,
  SavedPage,
  ExplorePage,
  ParticipantsPage,
  UsersPage,
  PicturesPage,
  AboutPage,
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

import { Messages } from "../../web/user";

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
      <NewsPage
        handleModalInfoShow={this.props.handleModalInfoShow}
        handleModalShow={this.props.handleModalShow}
      />
    );
  };

  handleEditProfile = match => {
    return (
      <EditProfilePage
        handleModalInfoShow={this.props.handleModalInfoShow}
        image={this.props.image}
        profile={this.props.profile}
        history={match.history}
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

  handleNewsFeed = match => {
    return <NewsFeedPage match={match.match} />;
  };

  handleSaved = match => {
    return <SavedPage match={match.match} />;
  };

  handleAbout = match => {
    return <AboutPage match={match.match} />;
  };

  handleExplore = () => {
    return (
      <ExplorePage
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
        history={match.history}
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

  handlePrivacyPage = match => {
    return (
      <PrivacyPage
        history={match.history}
        type={match.match.params.type}
        handleModalInfoShow={this.props.handleModalInfoShow}
        handleModalShow={this.props.handleModalShow}
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
            component={this.handleNewsFeed}
          />
          <Route exact path={routes.SAVED_ROUTE} component={this.handleSaved} />
          <Route exact path={routes.ABOUT_ROUTE} component={this.handleAbout} />

          <Route
            exact
            path={routes.OTHER_NEWS_FEED_ROUTE}
            component={this.handleNewsFeed}
          />
          <Route
            exact
            path={routes.OTHER_ABOUT_ROUTE}
            component={this.handleAbout}
          />

          <Route
            exact
            path={routes.OTHER_SAVED_ROUTE}
            component={this.handleSaved}
          />

          <Route exact path={routes.MESSAGES_ROUTE} component={Messages} />

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
            component={this.handlePrivacyPage}
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
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  image: PropTypes.any,
  profile: PropTypes.any
};

export default HomeRoute;
