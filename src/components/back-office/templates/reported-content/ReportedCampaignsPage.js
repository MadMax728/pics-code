import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics,
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

class ReportedCampaignsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
    };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "campaign"
    };
    this.setState({ isLoading: true });
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  getBackOfficeReportedContent = data => {
    this.props.getBackOfficeReportedContent(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData.campaign
      ) {
        this.setState({
          campaignList: this.props.reportedContentData.campaign,
          isLoading: this.props.reportedContentData.isLoading
        });
      }
    });
  };

  getBackOfficeReportedStatistics = data => {
    this.props.getBackOfficeReportedStatistics(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData.campaignStatistics
      ) {
        // success
      }
    });
  };

  handleReported = e => {
    let data;
    if (e.target.id === "All") {
      data = {
        type: "get",
        reportContent: "campaign"
      };
      this.setState({ isSearch: false });
    } else {
      data = {
        type: "search",
        reportContent: "campaign",
        searchType: `${e.target._id}`
      };
      this.setState({ isSearch: true });
    }
    this.getBackOfficeReportedContent(data);
  };

  handleRemove = data => {
    const { campaignList, isSearch } = this.state;
    if (isSearch) {
      this.setState({ campaignList: campaignList.filter(e => e._id !== data) });
    }
  };

  rendercampaigns = () => {
    let { campaignList } = this.state;
    const { form } = this.state;
    const {
      searchData,
      handleModalInfoDetailsCallbackShow,
      handleModalInfoShow
    } = this.props;
    campaignList = search(
      campaignList,
      "userName",
      form.search || searchData.searchKeyword
    );

    return campaignList.map(campaign => {
      return (
        <div key={campaign._id}>
          {
            (campaign.postType.toLowerCase() ===
              enumerations.contentTypes.companyCampaig ||
              enumerations.contentTypes.creatorCampaign) && (
              <CampaignCard
                item={campaign}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport
                isBackOffice
                handleModalInfoDetailsCallbackShow={
                  handleModalInfoDetailsCallbackShow
                }
                handleRemove={this.handleRemove}
                handleModalInfoShow={handleModalInfoShow}
              />
            )}
        </div>
      );
    });
  };

  handleSearch = event => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "campaign"
      };
      this.setState({ isLoading: true });
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  };

  render() {
    let { campaignList } = this.state;
    const { form } = this.state;
    const { isLoading } = this.state;
    const { reportedContentData, searchData } = this.props;
    campaignList = search(
      campaignList,
      "userName",
      form.search || searchData.searchKeyword
    );

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar
            handleSearch={this.handleSearch}
            value={form.search}
          />
          {campaignList && this.rendercampaigns()}
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
              reportedContentData.campaignStatistics
                ? reportedContentData.campaignStatistics.All
                : 0
            }
            outstanding={
              reportedContentData.campaignStatistics
                ? reportedContentData.campaignStatistics.Outstanding
                : 0
            }
            processed={
              reportedContentData.campaignStatistics
                ? reportedContentData.campaignStatistics.Processed
                : 0
            }
            notProcessed={
              reportedContentData.campaignStatistics
                ? reportedContentData.campaignStatistics.NotProcessedSub
                : 0
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics,
  getSearch
};

ReportedCampaignsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired,
  handleModalInfoShow: PropTypes.func
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedCampaignsPage);
