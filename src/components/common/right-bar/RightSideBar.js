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

        <Route path={
            [ 
              routes.ROOT_ROUTE, 
              routes.USERS_ROUTE, 
              routes.PICS_ROUTE, 
              routes.PARTICIPANTS_ROUTE, 
              routes.EXPLORE_ROUTE, 
              routes.CAMPAIGN_ROUTE, 
              routes.CAMPAIGN_PARTICIPANT_ROUTE, 
              routes.CAMPAIGN_INFORMATION_ROUTE
            ]} exact component={FavouriteCampaigns} />
       
        {/* ,,,,,, FavouriteCampaigns ...... */}

        {/* ,,,,,, community ...... */}

        <Route path={
            [ 
              routes.NEWS_FEED_ROUTE, 
              routes.OTHER_NEWS_FEED_ROUTE, 
              routes.OTHER_ABOUT_ROUTE, 
              routes.OTHER_SAVED_ROUTE, 
              routes.ABOUT_ROUTE, 
              routes.SAVED_ROUTE, 
            ]} exact component={this.handleCommunity} />

        {/* ,,,,,, community ...... */}

        {/* ,,,,,, userLanguage ...... */}

        <Route path={
            [ 
              routes.ROOT_ROUTE, 
              routes.USERS_ROUTE, 
              routes.PICS_ROUTE, 
              routes.PARTICIPANTS_ROUTE, 
              routes.EXPLORE_ROUTE, 
              routes.CAMPAIGN_ROUTE, 
              routes.CAMPAIGN_PARTICIPANT_ROUTE, 
              routes.CAMPAIGN_INFORMATION_ROUTE
            ]} exact render={this.userLanguage} />

        {/* ,,,,,, userLanguage ...... */}

        {/* ........ Campaign and Ads Right bar ........ */}

        <Route path={
            [ 
              routes.SETTINGS_CAMPAIGN_ROUTE, 
              routes.SETTINGS_ADS_ROUTE
            ]} exact render={this.SettingAdsRight} />
      
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
