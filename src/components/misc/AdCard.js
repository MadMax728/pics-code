import React, { Component } from "react";
import PropTypes from "prop-types";
import AdCardHeader from "./headers/AdCardHeader";
import AdCardBody from "./body/AdCardBody";
import AdCardFooter from "./footers/AdCardFooter";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost, addReport } from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";
import { modalType } from "../../lib/constants";
import { Auth } from "../../auth";
import { ReportTips } from "./items";

class AdCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: "",
      totalCommentsCount: ""
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
      savedData,
      isBackOffice,
      handleModalInfoDetailsCallbackShow,
      handleModalShow,
      handleRemove,
      isSavedPage
    } = this.props;
    const { isComments, item, comments } = this.state;
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
          isBackOffice={isBackOffice}
          handleModalInfoDetailsCallbackShow={handleModalInfoDetailsCallbackShow}
          handleModalShow={handleModalShow}
          handleRemove={handleRemove}
          isSavedPage={isSavedPage}
          handleFavorite={this.handleFavorite}
          isLoading={false}
          isReport={isReport}
          isReview={isReview}
        />
        {isComments && (
          <CommentCard
            item={comments}
            itemId={item.id}
            typeContent={"Ads"}
            handleComment={this.handleComment}
            totalCommentsCount={comments.length}
          />
        )}
      </div>
    );
  }

  handleLockContent = e => {
    const { isReview } = this.props;
    let data;
    if (isReview) {
      data = {
        id: e.target.id,
        contentStatus: enumerations.reportType.lock,
        reportContent: "Advertisement",
        isReview
      };
    } else {
      data = {
        typeId: e.target.id,
        contentStatus: enumerations.reportType.lock,
        reportContent: "Ads"
      };
    }
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleSetState = data => {
    clearInterval(this.timer);
    const { item } = this.state;
    const { isReview } = this.props;
    if (isReview) {
      item.contentStatus = data.contentStatus;
    } else {
      item.reportStatus = data.contentStatus;
    }
    this.setState({ item });
    this.props.handleRemove(item.id);
  };

  handleDoNotContent = e => {
    const { isReview } = this.props;
    let data;

    if (isReview) {
      data = {
        id: e.target.id,
        contentStatus: enumerations.reportType.doNotLock,
        reportContent: "Advertisement",
        isReview
      };
    } else {
      data = {
        typeId: e.target.id,
        contentStatus: enumerations.reportType.doNotLock,
        reportContent: "Ads"
      };
    }

    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleUnlockContent = e => {
    const { isReview } = this.props;
    let data;

    if (isReview) {
      data = {
        id: e.target.id,
        contentStatus: enumerations.reportType.unLock,
        reportContent: "Advertisement",
        isReview
      };
    } else {
      data = {
        typeId: e.target.id,
        contentStatus: enumerations.reportType.unLock,
        reportContent: "Ads"
      };
    }
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  renderReportTips = id => {
    let reportTips;
    const { isBackOffice, isReview } = this.props;
    const { item } = this.state;

    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    
    if (isBackOffice) {
      reportTips = [
        {
          name: isReview
            ? item.contentStatus === enumerations.reportType.lock
              ? Translations.tool_tips.unlock
              : Translations.tool_tips.lock
            : item.reportStatus === enumerations.reportType.lock
            ? Translations.tool_tips.unlock
            : Translations.tool_tips.lock,
          handleEvent: isReview
            ? item.contentStatus === enumerations.reportType.lock
              ? this.handleUnlockContent
              : this.handleLockContent
            : item.reportStatus === enumerations.reportType.lock
            ? this.handleUnlockContent
            : this.handleLockContent
        },
        {
          name: Translations.tool_tips.do_not,
          handleEvent: this.handleDoNotContent
        }
      ];
    } else {
      reportTips = [
        {
          name: item.isReported
            ? Translations.tool_tips.unreport
            : Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        },
        {
          name: item.isSavedPost
            ? Translations.tool_tips.unsave
            : Translations.tool_tips.save,
          handleEvent: this.handleSavePost
        }
      ];
      if (item.createdBy === userInfo.id) {
        const data = {
            name: Translations.tool_tips.edit_post,
            handleEvent: this.handleEditPost
        }
        reportTips.unshift(data);
      }
    }
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleEditPost = e => {
    const { item } = this.state;
    this.props.handleModalShow(modalType.editAds , item);
  }

  handleReportPost = e => {
    const { item } = this.state;
    const data = {
      typeContent: "Ads",
      typeId: e.target.id,
      title: item.title
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData &&
        this.props.reportedContentData.addReport.typeId === item.id
      ) {
        item.isReported = !item.isReported;
        this.setState({ item });
      }
    });
  };

  handleContent = () => {};

  handleFavorite = e => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const adLike = {
      typeOfContent: "Ads",
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
    const AdId = {
      typeId: this.state.item.id
    };
    this.props.getComments(AdId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: this.props.comments.length
      });
    });
  };

  handleSavePost = e => {
    const { isSavedPage } = this.props;
    const item = this.state.item;
    const data = {
      post: e.target.id,
      postType: "advertisement"
    };

    this.props.setSavedPost(data).then(() => {
      if (
        this.props.savedData &&
        this.props.savedData.saved &&
        this.props.savedData.saved.post === item.id
      ) {
        item.isSavedPost = !item.isSavedPost;
        this.setState({ item });
        if (isSavedPage && !this.state.item.isSavedPost) {
          this.props.handleRemove(item.id);
        }
      }
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
