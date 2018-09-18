import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { TopBarUserInfo, TopBarOtherInfo } from "./top-bar-info";

class TopbarInfo extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={routes.MY_PROFILE_ROUTE}
          component={TopBarUserInfo}
        />
        <Route
          exact
          path={routes.INFORMATION_ROUTE}
          component={TopBarUserInfo}
        />
        <Route exact path={routes.NEWS_FEED_ROUTE} component={TopBarUserInfo} />
        <Route exact path={routes.ABOUT_ROUTE} component={TopBarUserInfo} />
        <Route exact path={routes.SAVED_ROUTE} component={TopBarUserInfo} />

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

export default TopbarInfo;
