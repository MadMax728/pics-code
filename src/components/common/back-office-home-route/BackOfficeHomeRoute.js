import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import { Landing } from "../../back-office";

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
        </Switch>
      </div>
    );
  }
}

BackOfficeHomeRoute.propTypes = {
  handleModalInfoShow: propTypes.func.isRequired
};

export default BackOfficeHomeRoute;
