import React, { Component } from "react";
import * as routes from "../lib/constants/routes";
import { Switch, Route } from "react-router-dom";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";

import {
  Landing,
  Users,
  Explore,
  Participants,
  Pictures
} from "../components/web/dashboard";
import {
  UserProfile,
  Privacy,
  EditProfile,
  BusinessProfile,
  BillsAndReceipts,
  DataDownload,
  SettingCampaign,
  Ads
} from "../components/web/user";

import { OtherNewsFeed, OtherAbout } from "../components/web/other";
import { OwnerNewsFeed, OwnerAbout, OwnerSaved } from "../components/web/owner";

import {
  Campaign,
  Company,
  Creator,
  Information,
  Participant
} from "../components/web/campaigns";
import {
  LeftSideBar,
  RightSideBar,
  TopBarInfo,
  CustomModal
} from "../components/common";

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalShow: false,
      modalType: ""
    };
  }

  handleModalHide = () => {
    this.setState({ modalShow: false });
  };

  handleModalShow = e => {
    this.setState({ modalShow: true, modalType: e });
  };

  getFilter(filterData) {
    //list of array data as object & calling API
    console.log(filterData);
  }

  render() {
    return (
      <div>
        <Header handleModalShow={this.handleModalShow} />
        <section>
          <CustomModal
            modalShow={this.state.modalShow}
            handleModalHide={this.handleModalHide}
            modalType={this.state.modalType}
          />
          <div className="container">
            <div className="row">
              <TopBarInfo handleModalShow={this.handleModalShow} />

              <div className="left_menu_second no-padding">
                <LeftSideBar getFilter={this.getFilter} />
              </div>

              <div>
                <Switch>
                  <Route
                    exact
                    path={routes.EXPLORE_ROUTE}
                    component={Explore}
                  />

                  <Route
                    exact
                    path={routes.NEWS_FEED_ROUTE}
                    component={OwnerNewsFeed}
                  />
                  <Route
                    exact
                    path={routes.SAVED_ROUTE}
                    component={OwnerSaved}
                  />
                  <Route
                    exact
                    path={routes.ABOUT_ROUTE}
                    component={OwnerAbout}
                  />

                  <Route
                    exact
                    path={routes.OTHER_NEWS_FEED_ROUTE}
                    component={OtherNewsFeed}
                  />
                  <Route
                    exact
                    path={routes.OTHER_ABOUT_ROUTE}
                    component={OtherAbout}
                  />

                  <Route
                    exact
                    path={routes.PARTICIPANTS_ROUTE}
                    component={Participants}
                  />

                  <Route exact path={routes.USERS_ROUTE} component={Users} />

                  <Route exact path={routes.PICS_ROUTE} component={Pictures} />

                  <Route path={routes.ROOT_ROUTE} exact component={Landing} />

                  <Route
                    path={routes.COMPANY_ROUTE}
                    exact
                    component={Company}
                  />

                  <Route
                    path={routes.CREATOR_ROUTE}
                    exact
                    component={Creator}
                  />

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

                  <Route
                    exact
                    path={routes.CAMPAIGN_INFORMATION_ROUTE}
                    component={Information}
                  />

                  <Route
                    exact
                    path={routes.CAMPAIGN_PARTICIPANT_ROUTE}
                    component={Participant}
                  />

                  {/* -------- Settings Routes --------- */}
                  <Route
                    exact
                    path={routes.SETTINGS_EDIT_PROFILE_ROUTE}
                    component={EditProfile}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_PRIVACY_ROUTE}
                    component={Privacy}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_BUSSINESS_PROFILE_ROUTE}
                    component={BusinessProfile}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_BILLS_AND_RECEIPTS_ROUTE}
                    component={BillsAndReceipts}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_DATA_DOWNLOAD_ROUTE}
                    component={DataDownload}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_ADS_ROUTE}
                    component={Ads}
                  />

                  <Route
                    exact
                    path={routes.SETTINGS_CAMPAIGN_ROUTE}
                    component={SettingCampaign}
                  />

                  {/* -------- Settings Routes --------- */}
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
