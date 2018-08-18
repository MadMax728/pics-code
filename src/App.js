import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Dashboard } from "./components/dashboard";
import { UserProfile, UserInfo } from "./components/profile";
import { LeftSideBar, RightSideBar } from "./components/common";
import { Campaign } from "./components/campaign";

class App extends Component {
  render() {
    return (
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
              <div className="col-sm-3 col-md-2 left_menu no-padding">
                <LeftSideBar />
              </div>
              <div className="col-sm-5 col-md-7">
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
              <div className="col-sm-4 col-md-3 right_bar no-padding pull-left">
                <RightSideBar />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
