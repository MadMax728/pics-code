import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Home from "./pages/home";
import Mobile from "./components/mobile/Mobile";
import { Login, ForgotPassword, Register } from "./components/onBoarding";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    console.log("Windows width", this.state);
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
    console.log("Width123", window.innerWidth);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  webRender = () => {
    return (
      <Switch>
        <Route exact path={routes.LOGIN_ROUTE} component={Login} />
        <Route exact path={routes.REGISTER_ROUTE} component={Register} />
        <Route path={routes.ROOT_ROUTE} component={Home} />
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
    const { width, height } = this.state;
    const isMobile = width <= 760 && height <= 600;
    if (isMobile) {
      return (
        <div>
          <Route render={this.mobileRender} />
        </div>
      );
    } else {
      return (
        <div>
          <Route render={this.webRender} />
        </div>
      );
    }
  }
}

export default App;
