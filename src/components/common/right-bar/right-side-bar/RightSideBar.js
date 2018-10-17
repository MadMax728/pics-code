import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { Languages } from "../languages";
import { RightAbout } from "../right-about";
import { FavouriteCampaigns } from "../../../../components/web/campaigns";
import { Community } from "../../../../components/web/dashboard";
import {
  SettingCampaignRight,
  SettingAdsRight,
  SettingCampaignStatisticsRight,
  SettingAdsStatisticsRight
} from "../../../../components/web/user/settings";
import propTypes from "prop-types";

class RightSideBar extends Component {
  userLanguage = () => {
    return (
      <div>
        <Languages />
        <RightAbout />
      </div>
    );
  };

  SettingCampaignRight = () => {
    return (
      <SettingCampaignRight handleModalShow={this.props.handleModalShow} />
    );
  };

  SettingAdsRight = () => {
    return <SettingAdsRight handleModalShow={this.props.handleModalShow} />;
  };

  render() {
    return (
      <div>
        {/* ,,,,,, FavouriteCampaigns ...... */}

        <Route path={routes.ROOT_ROUTE} exact component={FavouriteCampaigns} />
        <Route path={routes.USERS_ROUTE} exact component={FavouriteCampaigns} />
        <Route path={routes.PICS_ROUTE} exact component={FavouriteCampaigns} />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route
          path={routes.EXPLORE_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route
          path={routes.CREATOR_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route
          path={routes.COMPANY_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route
          path={routes.CAMPAIGN_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          component={FavouriteCampaigns}
        />

        {/* ,,,,,, FavouriteCampaigns ...... */}

        {/* ,,,,,, community ...... */}

        <Route path={routes.MY_PROFILE_ROUTE} exact component={Community} />
        <Route path={routes.NEWS_FEED_ROUTE} exact component={Community} />
        <Route
          path={routes.OTHER_NEWS_FEED_ROUTE}
          exact
          component={Community}
        />
        <Route path={routes.OTHER_ABOUT_ROUTE} exact component={Community} />
        <Route path={routes.ABOUT_ROUTE} exact component={Community} />
        <Route path={routes.SAVED_ROUTE} exact component={Community} />

        {/* ,,,,,, community ...... */}

        {/* ,,,,,, userLanguage ...... */}

        <Route path={routes.ROOT_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.USERS_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.PICS_ROUTE} exact render={this.userLanguage} />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          render={this.userLanguage}
        />
        <Route path={routes.EXPLORE_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.CAMPAIGN_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.COMPANY_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.CREATOR_ROUTE} exact render={this.userLanguage} />
        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          component={this.userLanguage}
        />

        {/* ,,,,,, userLanguage ...... */}

        {/* ........ Campaign and Ads Right bar ........ */}

        <Route
          path={routes.SETTINGS_CAMPAIGN_ROUTE}
          exact
          render={this.SettingCampaignRight}
        />
        <Route
          path={routes.SETTINGS_ADS_ROUTE}
          exact
          render={this.SettingAdsRight}
        />

        {/* <Route
          path={routes.SETTINGS_CAMPAIGN_STATISTICS_ROUTE}
          exact
          component={SettingCampaignStatisticsRight}
        /> */}
        {/* <Route
          path={routes.SETTINGS_ADS_STATISTICS_ROUTE}
          exact
          component={SettingAdsStatisticsRight}
        /> */}
      </div>
    );
  }
}

RightSideBar.propTypes = {
  handleModalShow: propTypes.func
};

export default RightSideBar;
