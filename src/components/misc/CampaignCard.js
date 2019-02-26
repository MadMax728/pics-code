import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignCardHeader from "./headers/CampaignCardHeader";
import CampaignCardBody from "./body/CampaignCardBody";
import CampaignCardFooter from "./footers/CampaignCardFooter";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost, addReport } from "../../actions";
import { connect } from "react-redux";
import * as enumerations from "../../lib/constants/enumerations";
import {
  modalType,
  BASE_CAMPAIGN_INFORMATION_ROUTE
} from "../../lib/constants";
import "emoji-mart/css/emoji-mart.css";
import { ReportTips } from "./items";
class CampaignCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: "",
      totalCommentsCount: "",
      isEmoji: false
    };
  }

  render() {
    const {
      isStatus,
      isDescription,
      isInformation,
      isBudget,
      isReport,
      likeData,
      reportedContentData,
      savedData
    } = this.props;
    const { isComments, item, comments } = this.state;
    return (
      <div className="feed_wrapper">
        <CampaignCardHeader
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
        />
        <CampaignCardBody
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          isLoading={reportedContentData.isLoading || savedData.isLoading}
        />
        <CampaignCardFooter
          campaign={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          isBudget={isBudget} /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item.id)}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
          isReport={isReport}
        />
        {isComments && (
          <CommentCard
            item={comments}
            itemId={item.id}
            typeContent={item.typeContent}
            handleComment={this.handleComment}
            totalCommentsCount={comments.length}
            isReport={isReport}
          />
        )}
      </div>
    );
  }

  renderReportTips = item => {
    const {       
            isReview,
            isBackOffice,
            handleModalInfoDetailsCallbackShow,
            handleRemove,
            isSavedPage 
          } = this.props;
          
    return  <ReportTips 
              item={item} 
              isBackOffice={isBackOffice} 
              isReview={isReview} 
              handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow}
              handleRemove={handleRemove}
              isSavedPage={isSavedPage}
            />
  };

  handleEditPost = e => {
    const { item } = this.state;
    this.props.handleModalShow(modalType.editCampaign, item);
  };

  handleFavorite = () => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const campaignLike = {
      typeOfContent: enumerations.likeContentTypes.campaign,
      typeId: item.id
    };
    this.props.like(campaignLike);
  };

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleCommentsSections = () => {
    const CampaignId = {
      typeId: this.state.item.id
    };
    this.props.getComments(CampaignId).then(() => {
      const totalComment = this.props.comments;
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: totalComment.length
      });
    });
  };

  handeleShare = () => {
    const { item } = this.state;
    const data = {
      url: `${window.location.origin}${BASE_CAMPAIGN_INFORMATION_ROUTE}${
        item.userType
      }${"/"}${item.id}`
    };
    this.props.handleModalInfoShow(modalType.share, data);
  };

  render() {
    const {
      isStatus,
      isDescription,
      isInformation,
      isBudget,
      isReport,
      likeData,
      reportedContentData,
      savedData
    } = this.props;
    const { isComments, item, comments } = this.state;
    return (
      <div className="feed_wrapper">
        <CampaignCardHeader
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
        />
        <CampaignCardBody
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          isLoading={reportedContentData.isLoading || savedData.isLoading}
        />
        <CampaignCardFooter
          campaign={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          isBudget={isBudget} /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item)}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
          isReport={isReport}
          handeleShare={this.handeleShare}
        />
        {isComments && (
          <CommentCard
            item={comments}
            itemId={item.id}
            typeContent={item.typeContent}
            handleComment={this.handleComment}
            totalCommentsCount={comments.length}
            isReport={isReport}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likeData: state.likeData,
  savedData: state.savedData,
  comments: state.commentData.comments,
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  like,
  getComments,
  addReport,
  setSavedPost
};

CampaignCard.propTypes = {
  getComments: PropTypes.func.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  comments: PropTypes.any,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  isBudget: PropTypes.bool.isRequired,
  isReport: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  likeData: PropTypes.any,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  isBackOffice: PropTypes.bool,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any,
  handleRemove: PropTypes.func,
  isSavedPage: PropTypes.bool,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignCard);
