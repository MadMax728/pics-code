import React, { Component } from "react";
import { modalType } from "../../../../lib/constants/enumerations";
import PropTypes from "prop-types";
import {
  getCampaignDetails,
  getSearch,
  getComments,
  setSavedPost,
  like,
  addReport
} from "../../../../actions";
import { connect } from "react-redux";
import { CampaignDetailsLoading } from "../../../ui-kit";
import { CampaignDetailsCard } from "../../../misc";
import * as routes from "../../../../lib/constants/routes";
import { ReportTips } from "../../../misc/items";

class InformationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      campaignId: this.props.match.params.id,
      comments: null
    };
  }

  handeleShare = () => {
    const { campaignId } = this.state;
    const data = {
      url: `${window.location.origin}${
        routes.BASE_CAMPAIGN_INFORMATION_ROUTE
      }${campaignId}`
    };
    this.props.handleModalInfoShow(modalType.share, data);
  };

  render() {
    const { campaignDetails, isLoading } = this.props;
    const { isComments, comments } = this.state;
    return (
      <div className="middle-section padding-rl-10">
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
            handeleShare={this.handeleShare}
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

  componentDidUpdate(prevProps, prevState) {
    const campaignId = this.props.match.params.id;

    if (campaignId !== prevState.campaignId) {
      this.setState(
        {
          isComments: false,
          campaignId,
          comments: null
        },
        () => {
          this.getCampaignDetailsData();
          this.handleCommentsSections();
        }
      );
    }
  }

  getCampaignDetailsData = () => {
    const { campaignId } = this.state;
    const data = `${campaignId}?type=Campaign`;

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
    if (this.props.campaignDetails.userType === "company") {
      this.props.handleModalShow(modalType.upload, {
        campaignId: e.target.id,
        campaignName: this.props.campaignDetails.campaignName,
        campaignCreatedById: this.props.campaignDetails.createdBy
      });
    } else {
      this.props.history.push(
        routes.MESSAGES_ROUTE + "?new=" + this.props.campaignDetails.userName
      );
    }
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

  renderReportTips = () => {
    const { campaignDetails } = this.props;

    return (
      <ReportTips
        item={campaignDetails}
        isBackOffice={false}
        isReview={false}
        isSavedPage={false}
      />
    );
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
  addReport: PropTypes.func,
  handleModalInfoShow: PropTypes.func
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
