import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants/routes";
import { LoginPassword, LoginLinkSend } from "./components/back-office";
import { Home, BackOfficeHome } from "./containers";
import Mobile from "./components/mobile/Mobile";
import {
  Login,
  Register,
  ResetEmail,
  ResetPassword,
  ForgotPassword
} from "./components/web/user";

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
          path={routes.ROOT_ROUTE}
          render={this.isAutgeneticatedBackOffice}
        />
      </Switch>
    );
  };

  isAutgeneticatedBackOffice = () => {
    if (!this.isLoggedIn()) {
      return (
        <div>
          <Route component={LoginLinkSend} />
        </div>
      );
    }

    return (
      <div>
        <Route component={BackOfficeHome} />
      </div>
    );
  };

  webRender = () => {
    return (
      <Switch>
        <Route exact path={routes.LOGIN_ROUTE} component={Login} />
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
        <Route path={routes.ROOT_ROUTE} render={this.isAutgeneticated} />
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

  isLoggedIn = () => {
    return true;
  };

  isLoggedInBackOffice = () => {
    return true;
  };

  isAutgeneticated = () => {
    if (!this.isLoggedIn()) {
      return (
        <div>
          <Route component={Login} />
        </div>
      );
    }

    return (
      <div>
        <Route component={Home} />
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isBackoffice = true;
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
        {isBackoffice ? (
          <Route render={this.backOfficeRender} />
        ) : (
          <Route render={this.webRender} />
        )}
      </div>
    );
  }
}

export default App;
