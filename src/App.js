import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants/routes";
import { LoginPassword, LoginLinkSend } from "./components/back-office";
import { Home, BackOfficeHome } from "./containers";
import Mobile from "./components/mobile/Mobile";
import { Auth } from "./auth";
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

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  backOfficeRender = () => {
    if (Auth.isUserAdmin()) {
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
    }
    return <div />;
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
        <Route render={this.backOfficeRender} />
      </div>
    );
  };

  isAdminUserAuthenticated = () => {
    if (!Auth.isAdminUserAuthenticated()) {
      return (
        <div>
          <Route
            exact
            path={routes.BACK_OFFICE_LOGIN_ROUTE}
            component={LoginLinkSend}
          />
        </div>
      );
    }

    return (
      <div>
        <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          component={BackOfficeHome}
        />
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 760;
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

export default App;
