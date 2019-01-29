import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";

import PropTypes from "prop-types";
import {
  SideBarSettingBackOffice,
  SideBarBackOffice,
  SideBarReviewMenu,
  SideBarReportedContentMenu
} from "../menu";
import { ReviewFilter, ReportedContentFilter } from "../filters";

class LeftSideBarBackOffice extends Component {

  render() {
    const { isRank } = this.props;
    return (
      <div>
        {/* Backoffice Menu */}
        {!isRank && <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarBackOffice}
        />}
        {!isRank && <Route
          path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {/* {!isRank && <Route
          path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
          exact
          component={SideBarBackOffice}
        />} */}

        {!isRank && <Route
          path={routes.BACK_OFFICE_EDIT_CMS_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {/* Reported content menu */}

        <Route
          path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
          exact
          component={SideBarReportedContentMenu}
        />

        {/* review menu */}
        {!isRank && <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />}

        {/* Filters  */}
        {!isRank && <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={this.handleReviewFilter}
        />}
        {!isRank && <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={this.handleReviewFilter}
        />}

        <Route
          path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        <Route
          path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
          exact
          component={this.handleReportedContentFilter}
        />

        {/* Setting Menu */}
        {!isRank && <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

       {!isRank && <Route
          path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {/* {!isRank && <Route
          path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />} */}

        {!isRank && <Route
          path={routes.BACK_OFFICE_EDIT_CMS_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

       {!isRank && <Route
          path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {!isRank && <Route
          path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}
      </div>
    );
  }

  handleReportedContentFilter = () => {
    return <ReportedContentFilter handleApplyClick={this.props.getFilter} />;
  };

  handleReviewFilter = () => {
    return <ReviewFilter handleApplyClick={this.props.getFilter} />;
  };

}

LeftSideBarBackOffice.propTypes = {
  getFilter: PropTypes.func,
  isRank: PropTypes.bool.isRequired
};

export default LeftSideBarBackOffice;
