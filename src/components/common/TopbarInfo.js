import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import { UserInfo } from "../web/user";

class TopbarInfo extends Component {
  render() {
    return (
      <div>
        <Route exact path={routes.MY_PROFILE_ROUTE} component={UserInfo} />
        <Route exact path={routes.ABOUT_ROUTE} component={UserInfo} />
        <Route exact path={routes.INFORMATION_ROUTE} component={UserInfo} />
      </div>
    );
  }
}

export default TopbarInfo;
