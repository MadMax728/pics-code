import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

import propTypes from "prop-types";
import {
  SideBarSettingBackOffice,
  SideBarBackOffice,
  SideBarReviewMenu,
  SideBarReviewContentMenu
} from "../../menu";
import { ReviewFilter, ReportedContentFilter } from "../../filters";
class LeftSideBarBackOffice extends Component {
  handleReportedContentFilter = () => {
    return <ReportedContentFilter handleApplyClick={this.props.getFilter} />;
  };

  handleReviewFilter = () => {
    return <ReviewFilter handleApplyClick={this.props.getFilter} />;
  };

  render() {
    return (
      <div>
        <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />
        <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarBackOffice}
        />

        {/* Reported content menu */}

        <Route
          path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
          exact
          component={SideBarReviewContentMenu}
        />

        {/* review menu */}
        <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />

        <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />

        {/* Filters  */}
        <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={this.handleReviewFilter}
        />
        <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={this.handleReviewFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />
      </div>
    );
  }
}

LeftSideBarBackOffice.propTypes = {
  getFilter: propTypes.func
};

export default LeftSideBarBackOffice;
