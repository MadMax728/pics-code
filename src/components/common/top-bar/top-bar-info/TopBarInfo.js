import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { TopBarOwnerInfo } from "../top-bar-owner-info";
import { TopBarOtherInfo } from "../top-bar-other-info";

class TopBarInfo extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={routes.MY_PROFILE_ROUTE}
          component={TopBarOwnerInfo}
        />

        <Route
          exact
          path={routes.NEWS_FEED_ROUTE}
          component={TopBarOwnerInfo}
        />
        <Route exact path={routes.ABOUT_ROUTE} component={TopBarOwnerInfo} />
        <Route exact path={routes.SAVED_ROUTE} component={TopBarOwnerInfo} />

        <Route
          exact
          path={routes.OTHER_NEWS_FEED_ROUTE}
          component={TopBarOtherInfo}
        />
        <Route
          exact
          path={routes.OTHER_ABOUT_ROUTE}
          component={TopBarOtherInfo}
        />
      </div>
    );
  }
}

export default TopBarInfo;
