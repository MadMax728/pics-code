import React, { Component } from "react";
import { Translations } from "../../../../lib/translations";
import { modalType } from "../../../../lib/constants/enumerations";
import { RenderToolTips } from "../../../common";
import PropTypes from "prop-types";
import {
  getCampaignDetails,
  getSearch,
  getComments,
  setSavedPost,
  like,
  addReport
} from "../../../../actions";
import { getBackendPostType } from "../../../Factory";
import { connect } from "react-redux";
import { CampaignDetailsLoading } from "../../../ui-kit";
import { CampaignDetailsCard } from "../../../misc";

class InformationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      campaignId: this.props.match.params.id,
      comments: null,
      ReportTips: [
        {
          name: "Report Post",
          handleEvent: this.handleReportPost
        },
        {
          name: "Save Post",
          handleEvent: this.handleSavePost
        },
        {
          name: "locks / unlocks content",
          handleEvent: this.handleContent
        }
      ]
    };
  }

  render() {
    const { campaignDetails, isLoading } = this.props;
    const { isComments, comments } = this.state;
    return (
      <div className="padding-l-10 middle-section width-80">
        {campaignDetails && !isLoading && (
          <CampaignDetailsCard 
            campaignDetails={campaignDetails} 
            isComments={isComments} 
            comments={comments} 
            handleApplyParticipant={this.handleApplyParticipant} 
            handleCommentsSections={this.handleCommentsSections}
            handleFavorite={this.handleFavorite}
            handleOnKeyDown={this.handleOnKeyDown}
            renderReportTips={this.renderReportTips}
            handleComment={this.handleComment}
          />
        )}
        {isLoading && <CampaignDetailsLoading count={1} />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getCampaignDetailsData();
    this.handleCommentsSections();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      this.props.getSearch(nextProps.searchData.searchKeyword);
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push("/campaign/company?search=" + searchKeyword);
    }
  };

  getCampaignDetailsData = () => {
    const data = {
      id: this.state.campaignId
    };
    this.props.getCampaignDetails(data).then(() => {
      if (this.props.campaignDetails) {
        this.setState({
          campaignDetails: this.props.campaignDetails
        });
      }
    });
  };

  handleFavorite = () => {
    this.setState({
      campaignDetails: {
        ...this.props.campaignDetails,
        isSelfLike: !this.props.campaignDetails.isSelfLike,
        likeCount: this.props.campaignDetails.isSelfLike
          ? this.props.campaignDetails.likeCount - 1
          : this.props.campaignDetails.likeCount + 1
      }
    });
    this.props.campaignDetails.isSelfLike = !this.props.campaignDetails
      .isSelfLike;
    this.props.campaignDetails.likeCount = this.props.campaignDetails.isSelfLike
      ? this.props.campaignDetails.likeCount + 1
      : this.props.campaignDetails.likeCount - 1;
    const campeignLike = {
      typeOfContent: "campaign",
      typeId: this.state.campaignId
    };
    this.props.like(campeignLike);
  };

  handleApplyParticipant = e => {
    this.props.handleModalShow(modalType.upload, {
      campaignId: e.target.id,
      campaignName: this.props.campaignDetails.campaignName
    });
  };

  handleComment = commet => {
    const campaignDetails = this.props.campaignDetails;
    campaignDetails.commentCount = commet
      ? campaignDetails.commentCount + 1
      : campaignDetails.commentCount - 1;
    this.setState({ campaignDetails });
  };

  handleCommentsSections = () => {
    const CampaignId = { typeId: this.props.match.params.id };
    this.props.getComments(CampaignId).then(() => {
      const totalComment = this.props.comments;
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: totalComment.length
      });
    });
  };

  handleOnKeyDown = () => {};

  handleReportPost = e => {
    const { campaignDetails } = this.state;
    const data = {
      typeContent: "Campaign",
      typeId: e.target.id,
      title: campaignDetails.title
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData &&
        this.props.reportedContentData.addReport.typeId === campaignDetails.id
      ) {
        campaignDetails.isReported = !campaignDetails.isReported;
        this.setState({ campaignDetails });
      }
    });
  };

  handleSavePost = e => {
    const { campaignDetails } = this.state;
    // const { isSavedPage } = this.props;
    const data = {
      typeId: e.target.id,
      postType: getBackendPostType(campaignDetails)
    };

    this.props.setSavedPost(data).then(() => {
      if (
        this.props.savedData &&
        this.props.savedData.saved &&
        this.props.savedData.saved.typeId === campaignDetails.id
      ) {
        campaignDetails.isSavedPost = !campaignDetails.isSavedPost;
        this.setState({ campaignDetails });
      }
    });
  };

  handleContent = () => {};

  /**
   * Tooltp
   */
  renderReportTips = () => {
    let reportTips;
    const { campaignDetails } = this.state;
    if (campaignDetails) {
      reportTips = [
        {
          name: campaignDetails.isReported
            ? Translations.tool_tips.unreport
            : Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        },
        {
          name: campaignDetails.isSavedPost
            ? Translations.tool_tips.unsave
            : Translations.tool_tips.save,
          handleEvent: this.handleSavePost
        }
      ];
      return <RenderToolTips items={reportTips} id={campaignDetails.id} />;
    }
  };

}

InformationPage.propTypes = {
  handleModalShow: PropTypes.func,
  match: PropTypes.any,
  getCampaignDetails: PropTypes.func.isRequired,
  campaignDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  like: PropTypes.func.isRequired,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired,
  history: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.any,
  reportedContentData: PropTypes.any,
  savedData: PropTypes.any,
  setSavedPost: PropTypes.func,
  addReport: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignDetails: state.campaignData.campaign,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error,
  searchData: state.searchData,
  comments: state.commentData.comments,
  likeData: state.likeData,
  savedData: state.savedData,
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  getCampaignDetails,
  like,
  getSearch,
  getComments,
  addReport,
  setSavedPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationPage);
