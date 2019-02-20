import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import * as routes from "../../../lib/constants/routes";
import * as enumerations from "../../../lib/constants/enumerations";

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
        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarBackOffice}
        />}
        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {/* {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
          exact
          component={SideBarBackOffice}
        />} */}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_EDIT_CMS_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {/* {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
          exact
          component={SideBarBackOffice}
        />} */}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
          exact
          component={SideBarBackOffice}
        />}

        {/* Reported content menu */}

        { (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
              exact
              component={SideBarReportedContentMenu}
            />
          )
        }

        {/* review menu */}
        {(isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank2) && <Route
          path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />}

        {(isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank2) && <Route
          path={routes.BACK_OFFICE_ADS_ROUTE}
          exact
          component={SideBarReviewMenu}
        />}
        
        {/*  Review  */}
        {/* Filters  */}
        {(isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank2) && 
          (<Route
            path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
            exact
            component={this.handleReviewFilter}
          />)
        }
        {(isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank2) && 
          (<Route
            path={routes.BACK_OFFICE_ADS_ROUTE}
            exact
            component={this.handleReviewFilter}
          />)
        }

        {/* Report */}
        { (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        { 
          (isRank === enumerations.adminRank.rank1 || isRank === enumerations.adminRank.rank3) &&
          (
            <Route
              path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
              exact
              component={this.handleReportedContentFilter}
            />
          )
        }

        {/* Setting Menu */}
        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ROOT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

       {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {/* {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />} */}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_EDIT_CMS_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {/* {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />} */}

       {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}

        {isRank === enumerations.adminRank.rank1 && <Route
          path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
          exact
          component={SideBarSettingBackOffice}
        />}
      </div>
    );
  }

  handleReportedContentFilter = () => {
    return <ReportedContentFilter handleApplyClick={this.props.getFilter} isRank={this.props.isRank} />;
  };

  handleReviewFilter = () => {
    return <ReviewFilter handleApplyClick={this.props.getFilter} isRank={this.props.isRank} />;
  };

}

LeftSideBarBackOffice.propTypes = {
  getFilter: PropTypes.func,
  isRank: PropTypes.string.isRequired
};

export default LeftSideBarBackOffice;
