import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { MediaCard } from "../../../misc";
import * as enumerations from "../../../../lib/constants/enumerations";

class ImagesBOPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentImages").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentImages) {
        this.setState({
          imageList: this.props.reportedContentData.reportedContentImages
        })
      }
    });
  };

  renderImageList = () => {
    const { imageList } = this.state;
    return imageList.map(image => {
      return (
        <div key={image.id}>
          {image.postType === enumerations.contentTypes.mediaPost &&  
          image.typeContent &&
          image.typeContent.toLowerCase() === enumerations.mediaTypes.image &&
          (
            <MediaCard item={image} isDescription isReport/>
          )}
        </div>
      );
    });
  };
  render() {
    const { imageList } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {imageList && !isLoading && this.renderImageList()}
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

ImagesBOPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesBOPage);