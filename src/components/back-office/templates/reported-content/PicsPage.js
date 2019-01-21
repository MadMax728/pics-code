import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReportedContent, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import { CampaignLoading, NoDataFoundCenterPage } from "../../../ui-kit";
import { PictureCard } from "../../../misc";

import { search } from "../../../../lib/utils/helpers";

class PicsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      picList: null,
      form: {
        search: ""
      }
    };
  }

  render() {
    let { picList, form } = this.state;
    const { isLoading, searchData } = this.props;
    picList = search(picList,"userName", form.search || searchData.searchKeyword);

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        { picList && !isLoading && this.renderPicList()}
        { isLoading && <CampaignLoading />}
        { picList && picList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentPics").then(() => {
      if (this.props.reportedContentData && this.props.reportedContentData.reportedContentPics) {
        this.setState({
          picList: this.props.reportedContentData.reportedContentPics
        })
      }
    });
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "Pics"
      }
      this.setState({isLoading: true});
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
  }

  renderPicList = () => {
    let { picList, form } = this.state;
    const { searchData } = this.props;
    picList = search(picList,"userName", form.search || searchData.searchKeyword);
    return picList.map((pic, index) => {
      const clearfixDiv = index % 2 === 0 ? <div className="clearfix" /> : null;
      return (
        <div key={pic.id}>
          {clearfixDiv}
          <PictureCard item={pic} index={index} isReport />
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
  getSearch
};

PicsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicsPage);
