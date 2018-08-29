import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Dashboard } from "./components/dashboard";
import { UserProfile, UserInfo } from "./components/profile";
import { LeftSideBar, RightSideBar } from "./components/common";
import { Campaign } from "./components/campaign";
import Mobile from "./components/mobile/Mobile";
import { LoginRoutes } from "./loginRoutes";
import { AppTypes } from "./types";
import { getIsAuth } from "./reducers";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      width: window.innerWidth,
      height: window.innerHeight
    };

    console.group("Windows width:");
    console.log("Windows width", this.state);
    console.groupEnd();
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

  //if screen size is less than 767 * 560
  webRender = () =>
    this.props.isAuth.auth_token ? (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <Switch>
                <Route
                  exact
                  path={routes.MY_PROFILE_ROUTE}
                  component={UserInfo}
                />
              </Switch>
              <div className="left_menu no-padding">
                <LeftSideBar />
              </div>
              <div className="padding-rl-10 middle-section">
                <Switch>
                  <Route exact path={routes.ROOT_ROUTE} component={Dashboard} />
                  <Route
                    exact
                    path={routes.CAMPAIGN_ROUTE}
                    component={Campaign}
                  />
                  <Route
                    exact
                    path={routes.MY_PROFILE_ROUTE}
                    component={UserProfile}
                  />
                  <Route component={Dashboard} />
                </Switch>
              </div>
              <div className="right_bar no-padding pull-left">
                <RightSideBar />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    ) : (
      LoginRoutes.map(route => (
        <Switch key={route.path}>
          <Route exact path={route.path} component={route.component} />
        </Switch>
      ))
    );

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
    return (
      <React.Fragment>
        {isMobile ? (
          <Route render={this.mobileRender} />
        ) : (
          <Route render={this.webRender} />
        )}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  ...AppTypes
};
const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
});
export default connect(mapStateToProps)(App);
