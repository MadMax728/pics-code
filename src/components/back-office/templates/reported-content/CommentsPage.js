import React, { Component } from "react";
import ReportedSearchBar from "../ReportedSearchBar";
import { getBackOfficeReportedContent, getBackOfficeReportedStatistics } from "../../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CampaignLoading, RightSidebarStatistics } from "../../../ui-kit";
import { CommentCard } from "../../../misc";
import { Translations } from "../../../../lib/translations";

class CommentsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      commentList: null,
      isLoading: this.props.isLoading,
      isSearch: false
    };
  }

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Comment"
    }
    this.setState({isLoading: true});
    this.getBackOfficeReportedContent(data);
    this.getBackOfficeReportedStatistics(data);
  };

  getBackOfficeReportedContent = (data) => {
    this.props.getBackOfficeReportedContent(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.Comment) {
        this.setState({
          commentList: this.props.reportedContentData.Comment,
          isLoading: this.props.reportedContentData.isLoading
        })
      }
    });
  }


  getBackOfficeReportedStatistics = (data) => {
    this.props.getBackOfficeReportedStatistics(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData.CommentStatistics) {
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
        reportContent: "Comment"
      }
      this.setState({isSearch: false});
    }
    else {
      data = {
        type: "search",
        reportContent: "Comment",
        searchType: `${e.target.id}`
      }
      this.setState({isSearch: true});
    }
    this.getBackOfficeReportedContent(data);
  }

  handleRemove = (data) => {
    const { commentList, isSearch } = this.state;
    if (isSearch)
    {
      this.setState({commentList: commentList.filter(e => e.id !== data)});
    }
  }

  renderCommentList = () => {
    const { commentList } = this.state;
      return (
        <CommentCard
          item={commentList}
          totalCommentsCount={commentList.length}
          isReport
          isBackOffice
          handleModalInfoDetailsCallbackShow={this.props.handleModalInfoDetailsCallbackShow}
          handleRemove={this.handleRemove} 
        />
      );
  };

  render() {
    const { commentList, isLoading } = this.state;
    const { reportedContentData } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar />
          {commentList && this.renderCommentList()}
          {!commentList && isLoading && <CampaignLoading />}
        </div>
        <div className="right_bar no-padding">
          <RightSidebarStatistics 
            header={`Reported ${Translations.review_content_menu.comments}`} 
            handleEvent={this.handleReported} 
            all={reportedContentData.CommentStatistics? reportedContentData.CommentStatistics.all : 0} 
            outstanding={reportedContentData.CommentStatistics? reportedContentData.CommentStatistics.outstanding : 0}
            processed={reportedContentData.CommentStatistics? reportedContentData.CommentStatistics.processed : 0} 
            notProcessed={reportedContentData.CommentStatistics? reportedContentData.CommentStatistics.notProcessed : 0}
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

CommentsPage.propTypes = {
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
)(CommentsPage);