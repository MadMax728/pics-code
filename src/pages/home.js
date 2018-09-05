import React, { Component } from "react";
import * as routes from "../constants/routes";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dashboard } from "../components/dashboard";
import { UserProfile, UserInfo } from "../components/profile";
import { LeftSideBar, RightSideBar } from "../components/common";
import { Campaign } from "../components/campaign";

class Home extends Component {
  render() {
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
              <div className="left_menu_second no-padding">
                <LeftSideBar />

                {/* <LeftSideBarFilter /> */}

                {/* <div radioLinks={[]} title={''} clickEvent={this.click}>
                  <div>Radio filter title</div>
                  {radioLinks.map(link => {
                    return (
                      <label className={link.className}>
                          <span>{link.text}</span>
                          <input id={link.id} type="radio" name="relevance" onChnage={clickEvent}/>
                          <span className="checkmark"></span>
                       </label>
                    );
                  })}
                </div>

                <div inputLinks={[]} title={''} clickEvent={this.click}>
                  <div>In filter title</div>
                  {inputLinks.map(link => {
                    return (
                      <label className={link.className}>
                          <span>{link.text}</span>
                          <input id={link.id} type="radio" name="relevance" onChnage={clickEvent}/>
                          <span className="checkmark"></span>
                       </label>
                    );
                  })}
                </div> */}
              </div>
              <div className="middle-section padding-rl-10">
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
