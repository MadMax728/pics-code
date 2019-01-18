import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
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

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Video"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
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
    let { videoList, form } = this.state;
    videoList = search(videoList,"userName", form.search);

    return videoList.map(video => {
      return (
        <div key={video.id}>
          {video.postType === enumerations.contentTypes.mediaPost &&  
          video.typeContent &&
          video.typeContent.toLowerCase() === enumerations.mediaTypes.video &&
          (
            <MediaCard item={video} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} handleRemove={this.handleRemove} />
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
    event.preventDefault();
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  render() {
    let { videoList, form } = this.state;
    const { isLoading } = this.state;
    const { reportedContentData } = this.props;
    videoList = search(videoList,"userName", form.search);

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {videoList && this.renderVideoList()}
          {!videoList && isLoading && <CampaignLoading />}
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
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  getBackOfficeReportedContent,
  getBackOfficeReportedStatistics
};

VideosBOPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  getBackOfficeReportedStatistics: PropTypes.func,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosBOPage);

