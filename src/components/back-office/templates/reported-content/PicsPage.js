import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { PictureCard } from "../../../misc";

class PicsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      picList: null
    };
  }

  render() {
    const { picList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {picList && !isLoading && this.renderPicList()}
        {isLoading && <CampaignLoading />}
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
  };

  renderPicList = () => {
    const { picList } = this.state;

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
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  getBackOfficeReportedContent
};

PicsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicsPage);
