import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import {
  CMSManagementPage,
  CreateCMSManagementPage,
  DashboardPage,
  AdsPage,
  ImagesBOPage,
  AddVerificationPage,
  AddAdminPage,
  AddVoucherPage,
  CampaignsPage,
  VideosBOPage,
  ReportedCampaignsPage,
  PicsPage,
  ReportedAdsPage,
  CommentsPage,
  UsersPage
} from "../../back-office";

import * as settings from "../../web/templates";
import { PageNotFound } from "../../web/page-not-found";

class BackOfficeHomeRoute extends Component {
  handleLanding = (match) => {
    return <DashboardPage history={match.history} handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleAdsPage = () => {
    return <AdsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleCampaignsPage = () => {
    return <CampaignsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };
  handleImageBO = () => {
    return <ImagesBOPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleVideosBOPage = () => {
    return <VideosBOPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleReportedCampaignsPage = () => {
    return <ReportedCampaignsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleReportedAdsPage = () => {
    return <ReportedAdsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleUsersPage = () => {
    return <UsersPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };
  
  handleCommentsPage = () => {
    return <CommentsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleSettingCampaign = () => {
    return <settings.SettingCampaignPage isBackOffice />;
  };

  BackOffice = () => {
    return <settings.AdsPage isBackOffice />;
  };

  handlePageNotFound = () => {
    return <PageNotFound className={"page-not-found-wrapr"} />;
  };

  handleCreateCMSManagementPage = (match) => {
    return <CreateCMSManagementPage handleModalInfoDetailsShow={this.props.handleModalInfoDetailsShow} match={match.match} />
  }
  
  handleCMSManagementPage = (match) => {
    return <CMSManagementPage history={match.history} handleModalInfoDetailsShow={this.props.handleModalInfoDetailsShow} />
  }

  handleAddAdminPage = (match) => {
    return <AddAdminPage history={match.history} />
  }

  handleAddVerificationPage = (match) => {
    return <AddVerificationPage history={match.history} />
  }

  handleAddVoucherPage = (match) => {
    return <AddVoucherPage history={match.history} />
  }

  handleDataDownloadPage = (match) => {
    return <settings.DataDownloadPage history={match.history} />
  }

  render() {
    return (
      <div>
        <Switch>
          {/* backoffice routes */}
          <Route
            path={routes.BACK_OFFICE_ROOT_ROUTE}
            exact
            component={this.handleLanding}
          />

          <Route
            path={routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE}
            exact
            component={this.handleCMSManagementPage}
          />

          <Route
            path={routes.BACK_OFFICE_CREATE_CMS_ROUTE}
            exact
            component={this.handleCreateCMSManagementPage}
          />

          <Route
            path={routes.BACK_OFFICE_EDIT_CMS_ROUTE}
            exact
            component={this.handleCreateCMSManagementPage}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_ADMIN_ROUTE}
            exact
            component={this.handleAddAdminPage}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE}
            exact
            component={this.handleAddVerificationPage}
          />

          <Route
            path={routes.BACK_OFFICE_ADD_VOUCHER_ROUTE}
            exact
            component={this.handleAddVoucherPage}
          />

          <Route
            path={routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE}
            exact
            component={this.handleDataDownloadPage}
          />

          <Route
            path={routes.BACK_OFFICE_CAMPAIGNS_ROUTE}
            exact
            component={this.handleCampaignsPage}
          />

          <Route path={routes.BACK_OFFICE_ADS_ROUTE} exact component={this.handleAdsPage} />

          {/* reported routes */}
          <Route
            path={routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE}
            exact
            component={this.handleImageBO}
          />

          <Route
            path={routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE}
            exact
            component={this.handleVideosBOPage}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE}
            exact
            component={this.handleReportedCampaignsPage}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_PICS_ROUTE}
            exact
            component={PicsPage}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_ADS_ROUTE}
            exact
            component={this.handleReportedAdsPage}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE}
            exact
            component={this.handleCommentsPage}
          />
          <Route
            path={routes.BACK_OFFICE_REPORTED_USER_ROUTE}
            exact
            component={this.handleUsersPage}
          />
          <Route exact path="/*" component={this.handlePageNotFound} />
        </Switch>
      </div>
    );
  }
  
  handleLanding = () => {
    return <DashboardPage handleModalInfoShow={this.props.handleModalInfoShow} />;
  };

  handleAdsPage = () => {
    return <AdsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleCampaignsPage = () => {
    return <CampaignsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };
  handleImageBO = () => {
    return <ImagesBOPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleVideosBOPage = () => {
    return <VideosBOPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleReportedCampaignsPage = () => {
    return <ReportedCampaignsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleReportedAdsPage = () => {
    return <ReportedAdsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleUsersPage = () => {
    return <UsersPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };
  
  handleCommentsPage = () => {
    return <CommentsPage handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />;
  };

  handleSettingCampaign = () => {
    return <settings.SettingCampaignPage isBackOffice />;
  };

  BackOffice = () => {
    return <settings.AdsPage isBackOffice />;
  };

  handlePageNotFound = () => {
    return <PageNotFound className={"page-not-found-wrapr"} />;
  };

  handleCreateCMSManagementPage = (match) => {
    return <CreateCMSManagementPage handleModalInfoDetailsShow={this.props.handleModalInfoDetailsShow} match={match.match} />
  }
  
  handleCMSManagementPage= () => {
    return <CMSManagementPage handleModalInfoDetailsShow={this.props.handleModalInfoDetailsShow} />
  }

}

BackOfficeHomeRoute.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalInfoDetailsShow: PropTypes.func.isRequired,
  handleModalInfoDetailsCallbackShow: PropTypes.func.isRequired
};

export default BackOfficeHomeRoute;
