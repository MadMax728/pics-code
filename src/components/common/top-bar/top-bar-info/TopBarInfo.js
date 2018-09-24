import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import { TopBarOwnerInfo } from "../top-bar-owner-info";
import { TopBarOtherInfo } from "../top-bar-other-info";
import propTypes from "prop-types";

class TopBarInfo extends Component {
  TopBarOwnerInfo = () => {
    return <TopBarOwnerInfo handleModalShow={this.props.handleModalShow} />;
  };

  render() {
    return (
      <div>
        <Route
          exact
          path={routes.MY_PROFILE_ROUTE}
          component={this.TopBarOwnerInfo}
        />

        <Route
          exact
          path={routes.NEWS_FEED_ROUTE}
          component={this.TopBarOwnerInfo}
        />
        <Route
          exact
          path={routes.ABOUT_ROUTE}
          component={this.TopBarOwnerInfo}
        />
        <Route
          exact
          path={routes.SAVED_ROUTE}
          component={this.TopBarOwnerInfo}
        />

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

TopBarInfo.propTypes = {
  handleModalShow: propTypes.func
};

export default TopBarInfo;
