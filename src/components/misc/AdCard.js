import React, { Component } from "react";
import PropTypes from "prop-types";
import AdCardHeader from "./headers/AdCardHeader";
import AdCardBody from "./body/AdCardBody";
import AdCardFooter from "./footers/AdCardFooter";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost, addReport } from "../../actions";
import { connect } from "react-redux";
import { ReportTips } from "./items";
import { getBackendPostType } from "../Factory";
import { modalType } from "../../lib/constants";

class AdCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: "",
      totalCommentsCount: "",
      commentType: "advertisement"
    };
  }

  render() {
    const {
      isReview,
      isStatus,
      isDescription,
      isInformation,
      isReport,
      reportedContentData,
      savedData
    } = this.props;
    const { isComments, item, comments, commentType } = this.state;
    return (
      <div className="feed_wrapper">
        <AdCardHeader
          ad={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
          isLoading={false}
        />
        <AdCardBody
          ad={item}
          isDescription={isDescription}
          isInformation={isInformation}
          isLoading={reportedContentData.isLoading || savedData.isLoading}
        />
        <AdCardFooter
          ad={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item)}
          handleFavorite={this.handleFavorite}
          isLoading={false}
          isReport={isReport}
          isReview={isReview}
          commentType={commentType}
        />
        {isComments && (
          <CommentCard
            item={comments}
            itemId={item.id}
            typeContent={"Ads"}
            handleComment={this.handleComment}
            totalCommentsCount={comments.length}
            commentType={commentType}
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

    return (
      <ReportTips
        item={item}
        isBackOffice={isBackOffice}
        isReview={isReview}
        handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow}
        handleRemove={handleRemove}
        isSavedPage={isSavedPage}
        handleEdit={this.handleEditPost}
      />
    );
  };

  handleEditPost = () => {
    const { item } = this.state;
    this.props.handleModalShow(modalType.editAds, item);
  };

  handleFavorite = e => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const adLike = {
      typeOfContent: getBackendPostType(item),
      typeId: item.id
    };
    this.props.like(adLike);
  };

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleCommentsSections = () => {
    // const AdId = {
    //   typeId: this.state.item.id
    // };
    const AdId = this.state.item.id;
    const commentType = this.state.commentType;
    const getCommentEndPoint = commentType + "/" + AdId + "/comment/";
    this.props.getComments(getCommentEndPoint).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: this.props.comments.length
      });
    });
  };
}

AdCard.propTypes = {
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  likeData: PropTypes.any,
  like: PropTypes.func.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.any,
  isReport: PropTypes.bool,
  isBackOffice: PropTypes.bool,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any,
  handleRemove: PropTypes.func,
  isSavedPage: PropTypes.bool,
  isReview: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  handleModalShow: PropTypes.func
};

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
  setSavedPost,
  addReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdCard);
