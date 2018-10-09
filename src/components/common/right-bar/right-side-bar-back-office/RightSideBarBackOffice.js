import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

import {
  RightCampaignsList,
  RightAdsList,
  RightImagesList
} from "../right-side-list";

class RightSideBarBackOffice extends Component {
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
      </div>
    );
  }
}

export default RightSideBarBackOffice;
