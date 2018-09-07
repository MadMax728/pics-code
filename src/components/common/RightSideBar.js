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
        <Route path={routes.ROOT_ROUTE} exact component={FavouriteCampaigns} />
        <Route
          path={routes.CAMPAIGN_ROUTE}
          exact
          component={FavouriteCampaigns}
        />
        <Route path={routes.MY_PROFILE_ROUTE} exact component={Community} />
        <Route path={routes.ROOT_ROUTE} render={this.userLanguage} />
      </div>
    );
  }
}

export default RightSideBar;
