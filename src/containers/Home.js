import React, { Component } from "react";
import * as routes from "../lib/constants/routes";
import { Switch, Route } from "react-router-dom";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import { Landing } from "../components/web/dashboard";
import {
  UserProfile,
  About,
  Privacy,
  Information,
  EditProfile
} from "../components/web/user";
import { LeftSideBar, RightSideBar, TopbarInfo } from "../components/common";
import { Campaign } from "../components/web/campaigns";

class Home extends Component {
  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <TopbarInfo />

              <div className="left_menu_second no-padding">
                <LeftSideBar getFilter={this.getFilter} />
              </div>

              <div>
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
                  <Route exact path={routes.ABOUT_ROUTE} component={About} />
                  <Route
                    exact
                    path={routes.PRIVACY_ROUTE}
                    component={Privacy}
                  />

                  <Route
                    exact
                    path={routes.INFORMATION_ROUTE}
                    component={Information}
                  />

                  <Route
                    exact
                    path={routes.EDIT_PROFILE_ROUTE}
                    component={EditProfile}
                  />

                  <Route path={routes.ROOT_ROUTE} component={Landing} />
                </Switch>
              </div>
              <div className="right_bar no-padding">
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

export default Home;
