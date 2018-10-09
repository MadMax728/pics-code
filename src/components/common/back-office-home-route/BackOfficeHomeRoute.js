import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import { Landing, Campaigns, Ads, ImagesBO } from "../../back-office";

class BackOfficeHomeRoute extends Component {
  handleLanding = () => {
    return <Landing handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path={routes.BACK_OFFICE_ROOT_ROUTE}
            exact
            component={this.handleLanding}
          />
          <Route
            path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
            exact
            component={Campaigns}
          />
          <Route path={routes.BACK_OFFICE_ADS_ROUTE} exact component={Ads} />
          <Route
            path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
            exact
            component={ImagesBO}
          />
        </Switch>
      </div>
    );
  }
}

BackOfficeHomeRoute.propTypes = {
  handleModalInfoShow: propTypes.func.isRequired
};

export default BackOfficeHomeRoute;
