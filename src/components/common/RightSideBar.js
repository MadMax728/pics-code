import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { Languages, About } from "./";
import { FavouriteCampaigns } from "../../components/web/campaigns";
import { Community } from "../../components/web/dashboard";

class RightSideBar extends Component {
  userLanguage = () => {
    return (
      <div>
        <Languages />
        <About />
      </div>
    );
  };

  render() {
    return (
      <div>
        {/* ,,,,,, FavouriteCampaigns ...... */}

        <Route path={routes.ROOT_ROUTE} exact component={FavouriteCampaigns} />
        <Route path={routes.USER_ROUTE} exact component={FavouriteCampaigns} />
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

        {/* ,,,,,, FavouriteCampaigns ...... */}

        {/* ,,,,,, community ...... */}

        <Route path={routes.MY_PROFILE_ROUTE} exact component={Community} />
        <Route path={routes.NEWS_FEED_ROUTE} exact component={Community} />
        <Route path={routes.ABOUT_ROUTE} exact component={Community} />
        <Route path={routes.SAVED_ROUTE} exact component={Community} />

        {/* ,,,,,, community ...... */}

        {/* ,,,,,, userLanguage ...... */}

        <Route path={routes.ROOT_ROUTE} exact render={this.userLanguage} />
        <Route path={routes.USER_ROUTE} exact render={this.userLanguage} />
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

        {/* ,,,,,, userLanguage ...... */}
      </div>
    );
  }
}

export default RightSideBar;
