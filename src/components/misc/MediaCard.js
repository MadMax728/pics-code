import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaCardBody from "./body/MediaCardBody";
import MediaCardHeader from "./headers/MediaCardHeader";
import MediaCardFooter from "./footers/MediaCardFooter";
import CommentCard from "./CommentCard";
import { Translations } from "../../lib/translations";
import * as enumerations from "../../lib/constants/enumerations";
import { RenderToolTips } from "../common";
import {
  getComments,
  like,
  setSavedPost,
  addReport,
  removeParticipants
} from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";
import { modalType } from "../../lib/constants";

class MediaCard extends Component {
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
    const { isComments, item } = this.state;
    const {
      likeData,
      isDescription,
      isReport,
      reportedContentData,
      savedData
    } = this.props;
    return (
      <div className="feed_wrapper">
        <MediaCardHeader
          item={item}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
        />
        <MediaCardBody
          item={item}
          isDescription={isDescription}
          isLoading={reportedContentData.isLoading || savedData.isLoading}
        />
        <MediaCardFooter
          isLoading={likeData.isLoading}
          item={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item.id)}
          handleFavorite={this.handleFavorite}
          isReport={isReport}
        />
        {isComments && (
          <CommentCard
            item={this.state.comments}
            itemId={item.id}
            typeContent={item.typeContent}
            handleComment={this.handleComment}
            totalCommentsCount={this.state.comments.length}
          />
        )}
      </div>
    );
  }

  handleLockContent = e => {
    const { item } = this.state;
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.lock,
      reportContent: item.typeContent
    };
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
    item.reportStatus = data.contentStatus;
    this.setState({ item });
    this.props.handleRemove(item.id);
  };

  handleDoNotContent = e => {
    const { item } = this.state;
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.doNotLock,
      reportContent: item.typeContent
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleUnlockContent = e => {
    const { item } = this.state;
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.unLock,
      reportContent: item.typeContent
    };
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
    const { isBackOffice, isParticipant } = this.props;
    const { item } = this.state;

    if (isBackOffice) {
      reportTips = [
        {
          name:
            item.reportStatus === enumerations.reportType.lock
              ? Translations.tool_tips.unlock
              : Translations.tool_tips.lock,
          handleEvent:
            item.reportStatus === enumerations.reportType.lock
              ? this.handleUnlockContent
              : this.handleLockContent
        },
        {
          name: Translations.tool_tips.do_not,
          handleEvent: this.handleDoNotContent
        }
      ];
    } else if (isParticipant) {
      reportTips = [
        {
          name: Translations.tool_tips.remove_participant,
          handleEvent: this.handleRemoveParticipant
        }
      ];
    } else {
      reportTips = [
        {
          name: item.isReported
            ? Translations.tool_tips.remo
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
    }
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleReportPost = e => {
    const { item } = this.state;
    const data = {
      typeContent: item.typeContent,
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

  handleSavePost = e => {
    const { isSavedPage } = this.props;
    const item = this.state.item;
    const data = {
      typeId: e.target.id,
      postType: getBackendPostType(item)
    };

    this.props.setSavedPost(data).then(() => {
      if (
        this.props.savedData &&
        this.props.savedData.saved &&
        this.props.savedData.saved.typeId === item.id
      ) {
        item.isSavedPost = !item.isSavedPost;
        this.setState({ item });
        if (isSavedPage && !this.state.item.isSavedPost) {
          this.props.handleRemove(item.id);
        }
      }
    });
  };

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleFavorite = () => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const mediaLike = {
      typeOfContent: "mediapost",
      typeId: item.id
    };
    this.props.like(mediaLike);
  };

  handleCommentsSections = () => {
    const itemId = {
      typeId: this.state.item.id
    };
    this.props.getComments(itemId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: this.props.comments.length
      });
    });
  };

  handleRemoveParticipant = e => {
    this.props.removeParticipants(e.target.id).then(() => {
      console.log(this.props.campaignData.isRemoveParticipant);
      // this.setState({
      //   isComments: !this.state.isComments,
      //   comments: this.props.comments,
      //   totalCommentsCount: this.props.comments.length
      // });
    });
  };
}

const mapStateToProps = state => ({
  likeData: state.likeData,
  savedData: state.savedData,
  comments: state.commentData.comments,
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData,
  campaignData: state.campaignData
});

const mapDispatchToProps = {
  like,
  getComments,
  setSavedPost,
  addReport,
  removeParticipants
};

MediaCard.propTypes = {
  item: PropTypes.object.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  like: PropTypes.func.isRequired,
  comments: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  isParticipant: PropTypes.bool,
  isReport: PropTypes.bool,
  isDescription: PropTypes.bool.isRequired,
  likeData: PropTypes.any,
  isBackOffice: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  addReport: PropTypes.func,
  handleRemove: PropTypes.func,
  reportedContentData: PropTypes.any,
  isSavedPage: PropTypes.bool,
  isParticipant: PropTypes.any,
  removeParticipants: PropTypes.func,
  campaignData: PropTypes.any
};

MediaCard.defaultProps = {
  isParticipant: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaCard);
