import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBackOfficeReportedContent, getBackOfficeReportedStatistics, getSearch } from "../../../../actions";

import ReportedSearchBar from "../ReportedSearchBar";
import { CampaignLoading, RightSidebarStatistics, NoDataFoundCenterPage } from "../../../ui-kit";
import { CommentCard } from "../../../misc";

import { Translations } from "../../../../lib/translations";
import { search } from "../../../../lib/utils/helpers";

class CommentsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      commentList: null,
      isLoading: this.props.isLoading,
      isSearch: false,
      form: {
        search: ""
      }
    };
  }


  render() {
    const { isLoading } = this.state;
    let { commentList } = this.state;
    const { form } = this.state;
    const { searchData } = this.props;
    commentList = search(commentList, "userName", form.search  || searchData.searchKeyword);
    const { reportedContentData } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <ReportedSearchBar handleSearch={this.handleSearch} value={form.search} />
          {commentList && this.renderCommentList()}
          {!commentList && isLoading && <CampaignLoading />}
          {commentList && commentList.length === 0 && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
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

  componentDidMount = () => {
    const data = {
      type: "get",
      reportContent: "Comment"
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
    let { commentList } = this.state;
    const { form } = this.state;
    const { searchData, handleModalInfoDetailsCallbackShow } = this.props;
    commentList = search(commentList, "userName", form.search  || searchData.searchKeyword);
      return (
        <CommentCard
          item={commentList}
          totalCommentsCount={commentList.length}
          isReport
          isBackOffice
          handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow}
          handleRemove={this.handleRemove} 
        />
      );
  };

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
        reportContent: "Comment"
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

CommentsPage.propTypes = {
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
)(CommentsPage);