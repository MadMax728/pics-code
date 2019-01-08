import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { MediaCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";

class VideosBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoList: null,
      statistics: [
        {
          name: Translations.right_side_bar_statistics.all,
          id: "All",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.outstanding,
          id: "Outstanding",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.processed,
          id: "Processed",
          value: 0
        },
        {
          name: Translations.right_side_bar_statistics.not_processed,
          id: "NotProcessed",
          value: 0
        }
      ]
    };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Video"
    }
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Video) {
        this.setState({
          videoList: this.props.reportedContentData.Video
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.VideoStatistics) {
        this.setState({
          statistics: [
            {
              name: Translations.right_side_bar_statistics.all,
              id: "All",
              value: this.props.reportedContentData.VideoStatistics.all
            },
            {
              name: Translations.right_side_bar_statistics.outstanding,
              id: "Outstanding",
              value: this.props.reportedContentData.VideoStatistics.outstanding
            },
            {
              name: Translations.right_side_bar_statistics.processed,
              id: "Processed",
              value: this.props.reportedContentData.VideoStatistics.processed
            },
            {
              name: Translations.right_side_bar_statistics.not_processed,
              id: "NotProcessed",
              value: this.props.reportedContentData.VideoStatistics.notProcessed
            }
          ]
        })
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
    }
    else {
      data = {
        type: "search",
        reportContent: "Video",
        searchType: `${e.target.id}`
      }
    }
    this.getBackOfficeReportedContent(data);
  }

  renderVideoList = () => {
    const { videoList } = this.state;
    
    return videoList.map(video => {
      return (
        <div key={video.id}>
          {video.postType === enumerations.contentTypes.mediaPost &&  
          video.typeContent &&
          video.typeContent.toLowerCase() === enumerations.mediaTypes.video &&
          (
            <MediaCard item={video} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow}/>
          )}
        </div>
      );
    });
  };

  render() {
    const { videoList, statistics } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
          {videoList && !isLoading && this.renderVideoList()}
          {isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics header={`Reported ${Translations.review_content_menu.video}`} statistics={statistics} handleEvent={this.handleReported} />
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

