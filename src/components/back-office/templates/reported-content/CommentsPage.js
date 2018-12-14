import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../../ui-kit";
import { CommentCard } from "../../../misc";
class CommentsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      commentList: null
    };
  }

  componentDidMount = () => {
    this.props.getBackOfficeReportedContent("reportedContentComments").then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.reportedContentComments) {
        this.setState({
          commentList: this.props.reportedContentData.reportedContentComments
        })
      }
    });
  };

  renderCommentList = () => {
    const { commentList } = this.state;
      return (
        <CommentCard
          item={commentList}
          totalCommentsCount={commentList.length}
          isReport
        />
      );
  };

  render() {
    const { commentList } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        {commentList && !isLoading && this.renderCommentList()}
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

CommentsPage.propTypes = {
  getBackOfficeReportedContent: PropTypes.func.isRequired,
  reportedContentData: PropTypes.object,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);