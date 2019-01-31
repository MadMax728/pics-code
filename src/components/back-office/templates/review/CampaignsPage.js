import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getBackOfficeReview,
  getBackOfficeReviewStatistics,
  getSearch
} from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import {
  CampaignLoading,
  RightSidebarStatistics,
  NoDataFoundCenterPage
} from "../../../ui-kit";
import { CampaignCard } from "../../../misc";

import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class CampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null,
      form: {
        search: ""
      }
    };
  }

  render() {
    const { isLoading, reviewData, searchData } = this.props;
    let { campaignList, form } = this.state;
    campaignList = search(
      campaignList,
      "userName",
      form.search || searchData.searchKeyword
    );

    return (
      <div>
        <div className="padding-rl-10 middle-section margin-b-22">
          <ReportedSearchBar
            handleSearch={this.handleSearch}
            value={form.search}
          />
          {campaignList && this.renderCampaignList()}
          {!campaignList && isLoading && <CampaignLoading />}
          {campaignList && campaignList.length === 0 && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics
            header={`Reported ${Translations.review_content_menu.campaigns}`}
            handleEvent={this.handleReported}
            all={
              reviewData.CampaignsStatistics
                ? reviewData.CampaignsStatistics.all
                : 0
            }
            outstanding={
              reviewData.CampaignsStatistics
                ? reviewData.CampaignsStatistics.outstanding
                : 0
            }
            processed={
              reviewData.CampaignsStatistics
                ? reviewData.CampaignsStatistics.processed
                : 0
            }
            notProcessed={
              reviewData.CampaignsStatistics
                ? reviewData.CampaignsStatistics.notProcessed
                : 0
            }
          />
          <RightSidebarStatistics
            header={`Reported ${Translations.review_content_menu.ads}`}
            handleEvent={this.handleReported}
            all={
              reviewData.AdvertisementStatistics
                ? reviewData.AdvertisementStatistics.all
                : 0
            }
            outstanding={
              reviewData.AdvertisementStatistics
                ? reviewData.AdvertisementStatistics.outstanding
                : 0
            }
            processed={
              reviewData.AdvertisementStatistics
                ? reviewData.AdvertisementStatistics.processed
                : 0
            }
            notProcessed={
              reviewData.AdvertisementStatistics
                ? reviewData.AdvertisementStatistics.notProcessed
                : 0
            }
          />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.getBackOfficeReview();
    this.getBackOfficeReviewCampaignsStatistics();
    this.getBackOfficeReviewAdStatistics();
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  getBackOfficeReviewCampaignsStatistics = () => {
    const data = {
      reportContent: "Campaigns"
    };
    this.props.getBackOfficeReviewStatistics(data).then(() => {
      if (this.props.reviewData && this.props.reviewData.CampaignsStatistics) {
        // success
      }
    });
  };

  getBackOfficeReviewAdStatistics = () => {
    const data = {
      type: "get",
      reportContent: "Advertisement"
    };
    this.props.getBackOfficeReviewStatistics(data).then(() => {
      if (
        this.props.reviewData &&
        this.props.reviewData.AdvertisementStatistics
      ) {
        // success
      }
    });
  };

  getBackOfficeReview = () => {
    this.props.getBackOfficeReview("Campaigns").then(() => {
      if (this.props.reviewData && this.props.reviewData.Campaigns) {
        this.setState({
          campaignList: this.props.reviewData.Campaigns
        });
      }
    });
  };

  renderCampaignList = () => {
    let { campaignList, form } = this.state;
    const { searchData } = this.props;

    campaignList = search(
      campaignList,
      "userName",
      form.search || searchData.searchKeyword
    );
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {(campaign.postType.toLowerCase() ===
            enumerations.contentTypes.companyCampaign ||
            campaign.postType.toLowerCase() ===
              enumerations.contentTypes.creatorCampaign) && (
            <CampaignCard
              item={campaign}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget
              isReport={false}
              isBackOffice
              handleModalInfoDetailsCallbackShow={
                this.props.handleModalInfoDetailsCallbackShow
              }
              handleRemove={this.handleRemove}
            />
          )}
        </div>
      );
    });
  };

  handleRemove = data => {
    const { campaignList, isSearch } = this.state;
    if (isSearch) {
      this.setState({ campaignList: campaignList.filter(e => e.id !== data) });
    }
  };

  handleReported = () => {};

  handleSearch = event => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.getBackOfficeReview();
      this.getBackOfficeReviewCampaignsStatistics();
      this.getBackOfficeReviewAdStatistics();
    }
  };
}

const mapStateToProps = state => ({
  reviewData: state.reviewData,
  isLoading: state.reviewData.isLoading,
  error: state.reviewData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReview,
  getBackOfficeReviewStatistics,
  getSearch
};

CampaignsPage.propTypes = {
  getBackOfficeReview: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReviewStatistics: PropTypes.func,
  reviewData: PropTypes.object,
  getSearch: PropTypes.func.isRequired,
  searchData: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsPage);
