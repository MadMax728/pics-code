import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { TopBarOwnerInfo, TopBarOtherInfo } from "./info";
import PropTypes from "prop-types";

class TopBarInfo extends Component {

  render() {
    return (
      <div>
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
          component={this.TopBarOtherInfo}
        />
        <Route
          exact
          path={routes.OTHER_ABOUT_ROUTE}
          component={this.TopBarOtherInfo}
        />

        <Route
          exact
          path={routes.OTHER_SAVED_ROUTE}
          component={this.TopBarOtherInfo}
        />
      </div>
    );
  }

  TopBarOwnerInfo = () => {
    return (
      <TopBarOwnerInfo
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  };

  TopBarOtherInfo = (match) => {
    return <TopBarOtherInfo handleModalShow={this.props.handleModalShow} match={match.match.params} />;
  };

}

TopBarInfo.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default TopBarInfo;
