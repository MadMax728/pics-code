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
import { AdCard } from "../../../misc";

import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class ReportedAdsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      adList: null,
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
      reportContent: "Ads"
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
        this.props.reportedContentData.Ads
      ) {
        this.setState({
          adList: this.props.reportedContentData.Ads,
          isLoading: this.props.reportedContentData.isLoading
        });
      }
    });
  };

  getBackOfficeReportedStatistics = data => {
    this.props.getBackOfficeReportedStatistics(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData.AdsStatistics
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
        reportContent: "Ads"
      };
      this.setState({ isSearch: false });
    } else {
      data = {
        type: "search",
        reportContent: "Ads",
        searchType: `${e.target.id}`
      };
      this.setState({ isSearch: true });
    }
    this.getBackOfficeReportedContent(data);
  };

  handleRemove = data => {
    const { adList, isSearch } = this.state;
    if (isSearch) {
      this.setState({ adList: adList.filter(e => e.id !== data) });
    }
  };

  renderAds = () => {
    let { adList } = this.state;
    const { form } = this.state;
    const { searchData, handleModalInfoDetailsCallbackShow } = this.props;
    adList = search(
      adList,
      "userName",
      form.search || searchData.searchKeyword
    );

    return adList.map(ad => {
      return (
        <div key={ad.id}>
          {ad.postType &&
            ad.postType.toLowerCase() === enumerations.contentTypes.ad && (
              <AdCard
                item={ad}
                isDescription
                isInformation={false}
                isStatus={false}
                isReport
                isBackOffice
                handleModalInfoDetailsCallbackShow={
                  handleModalInfoDetailsCallbackShow
                }
                handleRemove={this.handleRemove}
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
        reportContent: "Ads"
      };
      this.setState({ isLoading: true });
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  };

  render() {
    let { adList } = this.state;
    const { form } = this.state;
    const { isLoading } = this.state;
    const { reportedContentData, searchData } = this.props;

    adList = search(
      adList,
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
          {adList && this.renderAds()}
          {!adList && isLoading && <CampaignLoading />}
          {adList && adList.length === 0 && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics
            header={`Reported ${Translations.review_content_menu.ads}`}
            handleEvent={this.handleReported}
            all={
              reportedContentData.AdsStatistics
                ? reportedContentData.AdsStatistics.all
                : 0
            }
            outstanding={
              reportedContentData.AdsStatistics
                ? reportedContentData.AdsStatistics.outstanding
                : 0
            }
            processed={
              reportedContentData.AdsStatistics
                ? reportedContentData.AdsStatistics.processed
                : 0
            }
            notProcessed={
              reportedContentData.AdsStatistics
                ? reportedContentData.AdsStatistics.notProcessed
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

ReportedAdsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportedAdsPage);
