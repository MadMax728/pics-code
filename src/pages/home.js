import React, { Component } from "react";
import * as routes from "../constants/routes";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dashboard } from "../components/dashboard";
import { UserProfile, UserInfo } from "../components/profile";
import { LeftSideBar, RightSideBar } from "../components/common";
import { Campaign } from "../components/campaign";
import { homeTypes } from "../types";

class Home extends Component {
  state = {};
  render() {
    const {
      match: { params, path }
    } = this.props;
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <Route
                exact
                path={routes.MY_PROFILE_ROUTE}
                component={UserInfo}
              />
              <div className="col-sm-3 col-md-2 left_menu no-padding">
                <LeftSideBar />
              </div>
              <div className="col-sm-5 col-md-7">
                <Switch>
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
                  <Route path={routes.ROOT_ROUTE} component={Dashboard} />
                </Switch>
              </div>
              <div className="col-sm-4 col-md-3 right_bar no-padding">
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
Home.propTypes = {
  ...homeTypes
};
export default Home;
