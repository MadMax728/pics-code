import React, { Component } from "react";
import * as qs from "query-string";
import { withRouter, Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants/routes";
import { LoginPassword, LoginLinkSend } from "./components/back-office";
import { Home, BackOfficeHome } from "./containers";
import Mobile from "./components/mobile/Mobile";
import { Auth } from "./auth";
import PropTypes from "prop-types";
import {
  Login,
  Register,
  ResetEmail,
  ResetPassword,
  ForgotPassword
} from "./components/web/auth-flow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  //logout handler for any user
  handleLogout = () => {
    //get the props from props.location
    //https://stackoverflow.com/questions/35352638/how-to-get-parameter-value-from-query-string
    const query = qs.parse(this.props.location.search);
    //check if logout param is exist
    if (query.logout || query.logout === "true") {
      Auth.logoutUser();
      //https://github.com/ReactTraining/react-router/issues/4802
      return <Redirect to={routes.ROOT_ROUTE} />;
    }

    return null;
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  isUserAuthenticated = () => {
    if (!Auth.isUserAuthenticated()) {
      return (
        <div>
          <Route component={Login} />
        </div>
      );
    }

    return (
      <div>
        <Route component={Home} />
        {Auth.isUserAdmin() && <Route render={this.backOfficeRender} />}
      </div>
    );
  };

  isAdminUserAuthenticated = () => {
    if (!Auth.isAdminUserAuthenticated()) {
      return <Redirect to={routes.BACK_OFFICE_LOGIN_ROUTE} />;
    }

    return (
      <div>
        <Route component={BackOfficeHome} />
      </div>
    );
  };

  backOfficeRender = () => {
    return (
      <Switch>
        <Route
          exact
          path={routes.BACK_OFFICE_LOGIN_ROUTE}
          component={LoginLinkSend}
        />
        <Route
          exact
          path={routes.LOGIN_PASSWORD_ROUTE}
          component={LoginPassword}
        />
        <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          render={this.isAdminUserAuthenticated}
        />
      </Switch>
    );
  };

  webRender = () => {
    return (
      <Switch>
        <Route
          exact
          path={routes.BACK_OFFICE_LOGIN_ROUTE}
          component={LoginLinkSend}
        />
        <Route
          exact
          path={routes.LOGIN_PASSWORD_ROUTE}
          component={LoginPassword}
        />
        <Route exact path={routes.REGISTER_ROUTE} component={Register} />
        <Route exact path={routes.RESET_EMAIL} component={ResetEmail} />
        <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
        <Route path={routes.ROOT_ROUTE} render={this.isUserAuthenticated} />
      </Switch>
    );
  };

  mobileRender = () => {
    return (
      <div>
        <Mobile />
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 760;
    this.handleLogout();
    if (isMobile) {
      return (
        <div>
          <Route render={this.mobileRender} />
        </div>
      );
    }
    return (
      <div>
        <Route render={this.webRender} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any,
  location: PropTypes.any
};

export default withRouter(App);
