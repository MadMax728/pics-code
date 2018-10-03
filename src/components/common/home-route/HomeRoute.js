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

import { CampaignsInformation } from "../../web/information";

class HomeRoute extends Component {
  handleLanding = () => {
    return <Landing handleModalInfoShow={this.props.handleModalInfoShow} />;
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
            component={EditProfile}
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

          <Route exact path={routes.SETTINGS_ADS_ROUTE} component={Ads} />

          <Route
            exact
            path={routes.SETTINGS_ADS_STATISTICS_ROUTE}
            component={AdsStatistics}
          />

          <Route
            exact
            path={routes.SETTINGS_CAMPAIGN_ROUTE}
            component={SettingCampaign}
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
            path={routes.INFORMATION_CAMPAIGN_ROUTE}
            component={CampaignsInformation}
          />
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
