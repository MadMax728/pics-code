import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { MediaCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";

class VideosBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentVideos").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentVideos) {
        this.setState({
          videoList: this.props.reportedContentData.reportedContentVideos
        })
      }
    });
  };

  renderVideoList = () => {
    const { videoList } = this.state;
    
    return videoList.map(video => {
      return (
        <div key={video.id}>
          {video.postType === enumerations.contentTypes.mediaPost &&  
          video.typeContent &&
          video.typeContent.toLowerCase() === enumerations.mediaTypes.video &&
          (
            <MediaCard item={video} isDescription isReport isBackOffice handleModalInfoDetailsShow={this.props.handleModalInfoDetailsShow}/>
          )}
        </div>
      );
    });
  };

  render() {
    const { videoList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {videoList && !isLoading && this.renderVideoList()}
        {isLoading && <CampaignLoading />}
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
  getBackOfficeReportedContent
};

VideosBOPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleModalInfoDetailsShow: PropTypes.func
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosBOPage);

