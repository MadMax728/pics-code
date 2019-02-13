import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReportedContent, getBackOfficeReportedStatistics, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
  import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { MediaCard } from "../../../misc";

import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class VideosBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
    };
  }

  render() {
    let { videoList } = this.state;
    const { form } = this.state;
    const { isLoading } = this.state;
    const { reportedContentData, searchData } = this.props;
    videoList = search(videoList,"userName", form.search || searchData.searchKeyword);

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {videoList && this.renderVideoList()}
          {!videoList && isLoading && <CampaignLoading />}
          {videoList && videoList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.videos}`}
            handleEvent={this.handleReported} 
            all={reportedContentData.VideoStatistics? reportedContentData.VideoStatistics.all : 0} 
            outstanding={reportedContentData.VideoStatistics? reportedContentData.VideoStatistics.outstanding : 0}
            processed={reportedContentData.VideoStatistics? reportedContentData.VideoStatistics.processed : 0} 
            notProcessed={reportedContentData.VideoStatistics? reportedContentData.VideoStatistics.notProcessed : 0}
          />          
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Video"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
    }
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Video) {
        this.setState({
          videoList: this.props.reportedContentData.Video,
          isLoading: this.props.reportedContentData.isLoading
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.VideoStatistics) {
        // success
      }
    });
  }

  handleReported = (e) => {
    let data;
    if (e.target.id === "All")
    {
      data ={
        type: "get",
        reportContent: "Video"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "Video",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }

  renderVideoList = () => {
    let { videoList } = this.state;
    const { form } = this.state;
    const { searchData, handleModalInfoDetailsCallbackShow } = this.props;

    videoList = search(videoList,"userName", form.search || searchData.searchKeyword);

    return videoList.map(video => {
      return (
        <div key={video.id}>
          {video.postType === enumerations.contentTypes.mediaPost &&  
          video.typeContent &&
          video.typeContent.toLowerCase() === enumerations.mediaTypes.video &&
          (
            <MediaCard item={video} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow} handleRemove={this.handleRemove} />
          )}
        </div>
      );
    });
  };

  handleRemove = (data) => {
    const { videoList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({videoList: videoList.filter(e => e.id !== data)});
    }
  }

  handleSearch = (event) => {
    const { form } = this.state;
    form[event.values.name] = event.values.val;
    this.setState({ form });
  }

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;

    if (searchData.searchKeyword) {
      getSearch("");
      const data = {
        type: "get",
        reportContent: "Video"
      }
      this.setState({isLoading: true});
      this.getBackOfficeReportedContent(data);
      this.getBackOfficeReportedStatistics(data);
    }
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

VideosBOPage.propTypes = {
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
)(VideosBOPage);

