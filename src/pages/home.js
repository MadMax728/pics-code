import React, { Component } from "react";
import * as routes from "../constants/routes";
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
    console.log("path", path);
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              {path === routes.MY_PROFILE_ROUTE && <UserInfo />}
              <div className="left_menu no-padding">
                <LeftSideBar />
              </div>
              <div className="padding-rl-10 middle-section">
                {path === "/home" && <Dashboard />}
                {params.page === "campaing" && <Campaign />}
                {params.page === "profile" && <UserProfile />}
              </div>
              <div className="right_bar no-padding pull-left">
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
