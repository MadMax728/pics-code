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
  NoDataFoundCenterPage,
  RightSidebarStatistics
} from "../../../ui-kit";
import { PictureCard } from "../../../misc";

import { search } from "../../../../lib/utils/helpers";
import { Translations } from "../../../../lib/translations";

class PicsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      picList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
    };
  }

  render() {
    const { searchData, reportedContentData } = this.props;
    let { picList, isLoading } = this.state;
    const { form } = this.state;
    picList = search(
      picList,
      "username",
      form.search || searchData.searchKeyword
    );

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar
            handleSearch={this.handleSearch}
            value={form.search}
          />
          {picList && !isLoading && this.renderPicList()}
          {isLoading && <CampaignLoading />}
          {picList && picList.length === 0 && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics
            header={`Reported ${Translations.review_content_menu.pics}`}
            handleEvent={this.handleReported}
            all={
              reportedContentData.PicsStatistics
                ? reportedContentData.PicsStatistics.all
                : 0
            }
            outstanding={
              reportedContentData.PicsStatistics
                ? reportedContentData.PicsStatistics.outstanding
                : 0
            }
            processed={
              reportedContentData.PicsStatistics
                ? reportedContentData.PicsStatistics.processed
                : 0
            }
            notProcessed={
              reportedContentData.PicsStatistics
                ? reportedContentData.PicsStatistics.notProcessed
                : 0
            }
          />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Pics"
    };
    this.setState({ isLoading: true });
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  handleSearch = event => {
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleReported = e => {
    let data;
    if (e.target.id === "All") {
      data = {
        type: "get",
        reportContent: "Pics"
      };
      this.setState({ isSearch: false });
    } else {
      data = {
        type: "search",
        reportContent: "Pics",
        searchType: `${e.target.id}`
      };
      this.setState({ isSearch: true });
    }
    this.getBackOfficeReportedContent(data);
  };

  getBackOfficeReportedContent = data => {
    this.props.getBackOfficeReportedContent(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData.Pics
      ) {
        this.setState({
          picList: this.props.reportedContentData.Pics,
          isLoading: this.props.reportedContentData.isLoading
        });
      }
    });
  };

  getBackOfficeReportedStatistics = data => {
    this.props.getBackOfficeReportedStatistics(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData.PicsStatistics
      ) {
        // success
      }
    });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "Pics"
      };
      this.setState({ isLoading: true });
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  };

  handleRemove = data => {
    const { picList, isSearch } = this.state;
    if (isSearch) {
      this.setState({ picList: picList.filter(e => e.id !== data) });
    }
  };

  renderPicList = () => {
    let { picList } = this.state;
    const { form } = this.state;
    const { searchData, handleModalInfoDetailsCallbackShow } = this.props;
    picList = search(
      picList,
      "userName",
      form.search || searchData.searchKeyword
    );
    return picList.map((pic, index) => {
      const clearfixDiv =
        index % 2 === 0 ? <div className="clearfix" /> : <div />;
      return (
        <div key={pic.id}>
          {clearfixDiv}
          <PictureCard
            item={pic}
            index={index}
            isReport
            isBackOffice
            handleModalInfoDetailsCallbackShow={
              handleModalInfoDetailsCallbackShow
            }
            handleRemove={this.handleRemove}
          />
        </div>
      );
    });
  };
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

PicsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  getBackOfficeReportedStatistics: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  handleModalShow: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicsPage);
