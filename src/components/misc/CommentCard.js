import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../lib/constants/images";
import { RenderToolTips, HashTagUsername } from "../common";
import { ThreeDots, ReadMore } from "../ui-kit";
import { Translations } from "../../lib/translations";
import {
  addComment,
  deleteComment,
  editComment,
  addReport
} from "../../actions";
import { connect } from "react-redux";
import { DateFormat } from "../Factory";
import ReportCard from "./ReportCard";
import * as enumerations from "../../lib/constants/enumerations";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class CommentCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.commentForm = React.createRef();
    this.state = {
      item: this.props.item,
      comments: this.props.item,
      itemId: this.props.itemId,
      typeOfContent: this.props.typeContent,
      minRange: 0,
      maxRange: 2,
      slicedCommentsData: null,
      form: {
        id: null,
        comment: ""
      },
      updateForm: {
        comment: ""
      },
      isEmoji: false
    };
  }

  handleReportPost = e => {
    const { item } = this.state;
    const comment = item[item.findIndex(i => i.id === e.target.id)];
    const data = {
      typeContent: "Comment",
      typeId: e.target.id,
      title: comment.comment
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData &&
        this.props.reportedContentData.addReport.typeId === comment.id
      ) {
        comment.isReported = !comment.isReported;
        this.setState({ item });
      }
    });
  };

  componentDidMount = () => {
    const commentData = this.state.comments.slice(
      this.state.minRange,
      this.state.maxRange
    );
    this.setState({ slicedCommentsData: commentData, maxRange: 2 });
  };

  addComment = comment => {
    const { comments, itemId, typeOfContent, slicedCommentsData } = this.state;
    const data = {
      comment,
      typeOfContent,
      typeId: itemId
    };
    this.props.addComment(data).then(() => {
      if (this.props.comment) {
        const commentData = {
          id: this.props.comment.id,
          comment: this.props.comment.comment,
          username: this.props.comment.userName,
          userId: this.props.comment.userId,
          profileImage: this.props.comment.profileImage,
          date: this.props.comment.createdAt
        };
        comments.unshift(commentData);
        slicedCommentsData.unshift(commentData);
        this.setState({ comments, slicedCommentsData });
        this.props.handleComment(true);
      }
    });
  };

  handleEditComment = e => {
    const id = e.target.id;
    const { comments } = this.state;
    this.setState({
      updateForm: {
        ...this.state.updateForm,
        comment: comments[comments.findIndex(c => c.id === id)].comment,
        id
      }
    });
  };

  handleViewComment = e => {
    const maxRangeValue = parseInt(this.state.maxRange) + parseInt(e.target.id);
    const commentData = this.state.comments.slice(0, maxRangeValue);
    this.setState({ slicedCommentsData: commentData, maxRange: maxRangeValue });
  };

  handleViewLessComment = () => {
    const maxRangeValue = "2";
    const commentData = this.state.comments.slice(0, maxRangeValue);
    this.setState({
      slicedCommentsData: commentData,
      minRange: 0,
      maxRange: maxRangeValue
    });
  };

  handleDelete = e => {
    const id = e.target.id;
    const { comments, slicedCommentsData } = this.state;
    const indexOf = comments.findIndex(c => {
      return c.id === id;
    });

    if (indexOf !== -1) {
      const data = {
        id
      };
      this.props.deleteComment(data).then(() => {
        comments.splice(indexOf, 1);
        slicedCommentsData.splice(indexOf, 1);
        this.setState({ comments, slicedCommentsData });
        this.props.handleComment(false);
      });
    }
  };

  /**
   * Tooltp
   */
  renderReportTips = id => {
    let reportTips;
    const { isBackOffice } = this.props;
    const { item } = this.state;

    if (isBackOffice) {
      reportTips = [
        {
          name:
            item[item.findIndex(i => i.id === id)].reportStatus ===
            enumerations.reportType.lock
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
    } else {
      reportTips = [
        {
          name: Translations.tool_tips.edit,
          handleEvent: this.handleEditComment
        },
        {
          name: item[item.findIndex(i => i.id === id)].isReported
            ? Translations.tool_tips.unreport_comment
            : Translations.tool_tips.report_comment,
          handleEvent: this.handleReportPost
        },
        {
          name: Translations.tool_tips.delete,
          handleEvent: this.handleDelete
        }
      ];
    }

    return (
      <RenderToolTips
        items={reportTips}
        id={id}
        isLoading={this.props.isLoading}
      />
    );
  };

  renderEditComment = comment => {
    const { updateForm } = this.state;
    const { isLoading } = this.props;
    let html = (
      <ReadMore text={comment.comment} min={150} ideal={150} max={150} />
    );
    if (comment.id === updateForm.id) {
      html = (
        <form onSubmit={this.handleUpdateSubmit}>
          <div>
            <div className="comment-input">
              <div className="form-group">
                <HashTagUsername
                  className="form-control"
                  type="text"
                  placeholder="Write a comment"
                  name="comment"
                  disabled={isLoading}
                  handleSetState={this.handleUpdateSetState}
                  value={updateForm.comment}
                  maxLimit={1000}
                  isText
                />
              </div>
            </div>
          </div>
          <input type="submit" hidden />
        </form>
      );
    }

    return html;
  };

  renderBackOfficeComment = comment => {
    const { isReport } = this.props;
    return (
      <div key={comment.id}>
        <div className="feed-comment">
          <div className="comment-wrapper">
            <div className="comment-header">
              <div className="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src={comment.profileImage}
                  alt={`comment-${comment.id}`}
                  className="img-circle img-responsive ht45"
                />
              </div>
              <div className="col-sm-10 col-md-9 col-xs-7 commenter-info">
                <b>{comment.userName}</b> {DateFormat(comment.createdAt, Translations.date_format.time, true)}{" "}
                <b>Reply</b>
              </div>
              <div className="col-sm-12 col-md-2 col-xs-2 show_more_options">
                <ThreeDots
                  id={`comment-${comment.id}`}
                  role="button"
                  dataTip="tooltip"
                  dataClass="tooltip-wrapr" /* eslint-disable */
                  getContent={() => this.renderReportTips(comment.id)}
                  effect="solid"
                  delayHide={500}
                  delayShow={500}
                  delayUpdate={500}
                  place={"left"}
                  border={true}
                  type={"light"}
                />
              </div>
            </div>
            <div className="comment-content">
              {this.renderEditComment(comment)}
            </div>
          </div>
        </div>
        {comment && isReport && <ReportCard item={comment} />}
      </div>
    );
  };

  renderComment = comment => {
    return (
      <div className="comment-wrapper" key={comment.id}>
        <div className="comment-header col-xs-12 no-padding">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={comment.profileImage}
              alt={`comment-${comment.id}`}
              className="img-circle img-responsive ht45"
            />
          </div>
          <div className="col-sm-10 col-md-9 col-xs-7 commenter-info">
            <b>{comment.userName}</b> {DateFormat(comment.createdAt, Translations.date_format.time, true)}{" "}
            <b>Reply</b>
          </div>
          <div className="col-sm-12 col-md-2 col-xs-2 show_more_options">
            <ThreeDots
              id={`comment-${comment.id}`}
              role="button"
              dataTip="tooltip"
              dataClass="tooltip-wrapr" /* eslint-disable */
              getContent={() => this.renderReportTips(comment.id)}
              effect="solid"
              delayHide={500}
              delayShow={500}
              delayUpdate={500}
              place={"left"}
              border={true}
              type={"light"}
            />
          </div>
        </div>
        <div className="comment-content col-md-12 no-padding">
          <div className="col-md-1" />
          <div className="col-md-10">{this.renderEditComment(comment)}</div>
        </div>
      </div>
    );
  };

  handleSetState = (value, cd) => {
    const { isBackOffice } = this.props;
    if (isBackOffice) {
      clearInterval(this.timer);
      const { item } = this.state;
      const comment = item[item.findIndex(i => i.id === value.typeId)];
      comment.reportStatus = value.contentStatus;
      this.setState({ item });
      this.props.handleRemove(comment.id);
    } else {
      this.setState({ form: { ...this.state.form, comment: value } }, () =>
        cd()
      );
    }
  };

  handleLockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.lock,
      reportContent: "Comment"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data, null);
      }
    );
  };

  handleDoNotContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.doNotLock,
      reportContent: "Comment"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data, null);
      }
    );
  };

  handleUnlockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.unLock,
      reportContent: "Comment"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data, null);
      }
    );
  };

  handleUpdateSetState = (value, cd) => {
    this.setState(
      { updateForm: { ...this.state.updateForm, comment: value } },
      () => cd()
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.form.comment !== "") {
      this.addComment(this.state.form.comment);
      this.commentForm.current.reset();
      this.setState({ form: { ...this.state.form, comment: "" } });
    }
  };

  handleUpdateSubmit = e => {
    e.preventDefault();
    const { comments, updateForm } = this.state;
    if (updateForm.comment !== "") {
      this.props.editComment(updateForm).then(() => {
        comments[comments.findIndex(c => c.id === updateForm.id)].comment =
          updateForm.comment;
        /* eslint-disable */
        this.setState({ comments });
        this.setState({
          updateForm: { ...this.state.updateForm, comment: "", id: null }
        });
      });
    }
  };

  /* Emoji */
  addEmoji = emoji => {
    const comment = this.state.form.comment;
    const newComment = comment + emoji.native;
    this.setState({ form: { comment: newComment } });
    this.setState({ isEmoji: false });
  };

  onEmojiOpen = () => {
    this.setState(prevState => ({
      isEmoji: !prevState.isEmoji
    }));
  };

  render() {
    const { item, form, isEmoji, isBackOffice } = this.state;
    const { isLoading, isReport } = this.props;
    return (
      <div className={isReport ? "feed_wrapper" : "feed-comment"} id={item.id}>
        {!isReport && (
          <div className="comment-wrapper">
            <form onSubmit={this.handleSubmit} ref={this.commentForm}>
              <div className="no-padding profile_image">
                <img
                  src={images.image}
                  alt="image1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="col-md-9 col-sm-7 col-xs-7 no-padding">
                <div className="comment-input">
                  <div className="form-group">
                    <HashTagUsername
                      className="form-control"
                      type="text"
                      placeholder="Write a comment"
                      name="comment"
                      disabled={isLoading}
                      handleSetState={this.handleSetState}
                      value={form.comment}
                      maxLimit={1000}
                      isText
                    />
                  </div>
                </div>
              </div>
              <div className="emoji_wrapper col-sm-2 col-xs-2 pull-right text-right">
                      <img
                        role="presentation"
                        className="pull-right"
                        src={images.emoji}
                        alt={"emoji1"}
                        onKeyPress={this.onEmojiOpen}
                        onClick={this.onEmojiOpen}
                      />
                      {isEmoji && (
                        <Picker
                          onSelect={this.addEmoji}
                          style={{
                            position: "absolute",
                            bottom: "135px",
                            right: "60px"
                          }}
                        />
                      )}
                    </div>
              <input type="submit" hidden />
            </form>
          </div>
        )}

        {isReport &&
          isBackOffice &&
          item &&
          item.map(this.renderBackOfficeComment)}

        {!isReport &&
          !isBackOffice &&
          this.props.totalCommentsCount !== 0 &&
          this.state.slicedCommentsData &&
          this.state.slicedCommentsData.map(this.renderComment)}

        {!isReport && this.props.totalCommentsCount > this.state.maxRange && (
          <div
            className="view-more-comments view-more-link"
            id="7"
            onClick={this.handleViewComment}
          >
            {Translations.view_more_comments}
          </div>
        )}

        {!isReport &&
          this.props.totalCommentsCount > 2 &&
          this.props.totalCommentsCount < this.state.maxRange && (
            <div
              className="view-more-comments view-more-link"
              onClick={this.handleViewLessComment}
            >
              {Translations.view_less_comments}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comment: state.commentData.comment,
  isLoading: state.commentData.isLoading,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  addComment,
  deleteComment,
  editComment,
  addReport
};

CommentCard.propTypes = {
  item: PropTypes.any,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleComment: PropTypes.func,
  editComment: PropTypes.func.isRequired,
  isReport: PropTypes.bool,
  comment: PropTypes.any,
  typeContent: PropTypes.any,
  isLoading: PropTypes.bool,
  itemId: PropTypes.any,
  maxLimit: PropTypes.any,
  totalCommentsCount: PropTypes.any,
  isBackOffice: PropTypes.bool,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  isBackOffice: PropTypes.bool,
  handleRemove: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCard);