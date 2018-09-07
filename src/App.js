import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants/routes";
import Home from "./containers/home";
import Mobile from "./components/mobile/Mobile";
import {
  Login,
  Register,
  ResetEmail,
  ResetPassword,
  ForgotPassword
} from "./components/web/onBoarding";

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

  webRender = () => {
    return (
      <Switch>
        <Route exact path={routes.LOGIN_ROUTE} component={Login} />
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
