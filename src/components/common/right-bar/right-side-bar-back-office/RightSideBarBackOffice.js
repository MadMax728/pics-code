import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

import {
  RightCampaignsList,
  RightAdsList,
  RightImagesList,
  RightVideosList,
  RightReportedCampaignList,
  RightPicsList,
  RightReportedAdList,
  RightCommentsList,
  RightUsersList
} from "../right-side-list";

class RightSideBarBackOffice extends Component {
  handleReportedList = () => {
    // return <ReportedContentFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={RightCampaignsList}
        />

        <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={RightAdsList}
        />

        <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={RightCampaignsList}
        />

        <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={RightAdsList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
          exact
          component={RightImagesList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
          exact
          component={RightVideosList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
          exact
          component={RightReportedCampaignList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
          exact
          component={RightPicsList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
          exact
          component={RightReportedAdList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
          exact
          component={RightCommentsList}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
          exact
          component={RightUsersList}
        />
      </div>
    );
  }
}

export default RightSideBarBackOffice;
