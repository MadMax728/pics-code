import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import { RightAbout } from "./";
import { FavouriteCampaigns } from "../../../components/web/campaigns";
import { Community } from "../../../components/web/dashboard";
import {
  SettingCampaignRight,
  SettingAdsRight
} from "../../../components/web/templates/settings";
import { Languages } from "../../common";

class RightSideBar extends Component {
  render() {
    return (
      <div>
        {/* ,,,,,, FavouriteCampaigns ...... */}

        <Route path={routes.ROOT_ROUTE} exact render={this.favCampaigns} />
        <Route path={routes.USERS_ROUTE} exact render={this.favCampaigns} />
        <Route path={routes.PICS_ROUTE} exact render={this.favCampaigns} />
        <Route
          path={routes.PARTICIPANTS_ROUTE}
          exact
          render={this.favCampaigns}
        />
        <Route
          path={routes.EXPLORE_ROUTE}
          exact
          render={this.favCampaigns}
        />
        <Route
          path={routes.CAMPAIGN_ROUTE}
          exact
          render={this.favCampaigns}
        />

        <Route
          path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
          exact
          render={this.favCampaigns}
        />

        <Route
          path={routes.CAMPAIGN_INFORMATION_ROUTE}
          exact
          render={this.favCampaigns}
        />

        {/* ,,,,,, FavouriteCampaigns ...... */}

        {/* ,,,,,, community ...... */}

        <Route
          path={routes.NEWS_FEED_ROUTE}
          exact
          component={this.handleCommunity}
        />
        <Route
          path={routes.OTHER_NEWS_FEED_ROUTE}
          exact
          component={this.handleCommunity}
        />
        <Route
          path={routes.OTHER_ABOUT_ROUTE}
          exact
          component={this.handleCommunity}
        />
        <Route
          path={routes.OTHER_SAVED_ROUTE}
          exact
          component={this.handleCommunity}
        />
        <Route
          path={routes.ABOUT_ROUTE}
          exact
          component={this.handleCommunity}
        />
        <Route
          path={routes.SAVED_ROUTE}
          exact
          component={this.handleCommunity}
        />

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

  userLanguage = () => {
    // here we have to switch language
    return (
      <div>
        <Languages handleLanguageSwitch={this.props.handleLanguageSwitch} />
        <RightAbout />
      </div>
    );
  };

  SettingCampaignRight = () => {
    return (
      <SettingCampaignRight handleModalShow={this.props.handleModalShow} />
    );
  };

  favCampaigns = () => {
    return (
      <FavouriteCampaigns key={'fav-campaigns'} />
    );
  };

  SettingAdsRight = () => {
    return <SettingAdsRight handleModalShow={this.props.handleModalShow} />;
  };

  handleCommunity = () => {
    return (
      <Community
        handleMessageBar={this.props.handleMessageBar}
        history={this.props.history}
      />
    );
  };
}

RightSideBar.propTypes = {
  handleModalShow: PropTypes.func,
  handleMessageBar: PropTypes.func.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired,
  history: PropTypes.any
};

export default RightSideBar;
