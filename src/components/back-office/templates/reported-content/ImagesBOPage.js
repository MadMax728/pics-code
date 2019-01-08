import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { MediaCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";
import { Translations } from "../../../../lib/translations";

class ImagesBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageList: null,
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
      reportContent: "Image"
    }
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Image) {
        this.setState({
          imageList: this.props.reportedContentData.Image
        })
      }
    });
  }

  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.ImageStatistics) {
        this.setState({
          statistics: [
            {
              name: Translations.right_side_bar_statistics.all,
              id: "All",
              value: this.props.reportedContentData.ImageStatistics.all
            },
            {
              name: Translations.right_side_bar_statistics.outstanding,
              id: "Outstanding",
              value: this.props.reportedContentData.ImageStatistics.outstanding
            },
            {
              name: Translations.right_side_bar_statistics.processed,
              id: "Processed",
              value: this.props.reportedContentData.ImageStatistics.processed
            },
            {
              name: Translations.right_side_bar_statistics.not_processed,
              id: "NotProcessed",
              value: this.props.reportedContentData.ImageStatistics.notProcessed
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
        reportContent: "Image"
      }
    }
    else {
      data = {
        type: "search",
        reportContent: "Image",
        searchType: `${e.target.id}`
      }
    }
    this.getBackOfficeReportedContent(data);
  }
  
  renderImageList = () => {
    const { imageList } = this.state;
    return imageList.map(image => {
      return (
        <div key={image.id}>
          {image.postType === enumerations.contentTypes.mediaPost &&  
          image.typeContent &&
          image.typeContent.toLowerCase() === enumerations.mediaTypes.image &&
          (
            <MediaCard item={image} isDescription isReport isBackOffice handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow} />
          )}
        </div>
      );
    });
  };

  render() {
    const { imageList, statistics } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
          {imageList && !isLoading && this.renderImageList()}
          {isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics header={`Reported ${Translations.review_content_menu.images}`} statistics={statistics} handleEvent={this.handleReported} />
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

ImagesBOPage.propTypes = {
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
)(ImagesBOPage);