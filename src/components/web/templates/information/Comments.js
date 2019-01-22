import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import { ThreeDots, ReadMore } from "../../../ui-kit";
import { RenderToolTips, HashTagUsername } from "../../../common";
import { Translations } from "../../../../lib/translations";
import {
  addComment,
  deleteComment,
  editComment,
  addReport,
  getComments
} from "../../../../actions";
import { connect } from "react-redux";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class Comments extends Component {
  constructor(props, context) {
    super(props, context);
    this.commentForm = React.createRef();
    const reportTips = [
      {
        name: Translations.tool_tips.edit,
        handleEvent: this.handleEditComment
      },
      {
        name: Translations.tool_tips.report_comment,
        handleEvent: this.handleReportPost
      },
      { name: Translations.tool_tips.delete, handleEvent: this.handleDelete }
    ];
    this.state = {
      campaign: this.props.campaign,
      comments: this.props.campaignComments,
      campaignId: this.props.campaign.id,
      typeOfContent: this.props.typeContent,
      minRange: 0,
      maxRange: 2,
      slicedCommentsData: null,
      form: { id: null, comment: "" },
      updateForm: { comment: "" },
      ReportTips: reportTips,
      currentComment: "",
      isEmoji: false
    };
  }

  render() {
    const {
      campaign,
      form,
      isEmoji
    } = this.state;
    const { isReport, userImage } = this.props;
    const profileImage = userImage || images.image;
    return (
      <div className="feed-comment" id={campaign.id}>
        <div className="comment-wrapper">
          <form onSubmit={this.handleSubmit} ref={this.commentForm}>
            <div className="no-padding profile_image">
              <img
                src={profileImage}
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
                    handleSetState={this.handleSetState}
                    value={form.comment}
                    maxLimit={1000}
                    isText
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-xs-2 emoji_wrapper pull-right text-right">
              <img
                role="presentation"
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

        {!isReport &&
          this.props.totalCommentsCount !== 0 &&
          this.state.slicedCommentsData &&
          this.state.slicedCommentsData.map(this.renderComment)}

        {!isReport && this.props.totalCommentsCount > this.state.maxRange && (
          <div
            className="view-more-comments view-more-link"
            id="7"
            onClick={this.handleViewComment}
            onKeyUp={this.handleViewComment}
            role='button'
            tabIndex="0"
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
              onKeyUp={this.handleViewLessComment}
              role='button'
              tabIndex="0"
            >
              {Translations.view_less_comments}
            </div>
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const commentData = this.state.comments.slice(
      this.state.minRange,
      this.state.maxRange
    );
    this.setState({ slicedCommentsData: commentData, maxRange: 2 });
  };

  handleReportPost = e => {
    const { comments } = this.state;
    const comment = comments[comments.findIndex(i => i.id === e.target.id)];
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
        this.setState({ comments });
      }
    });
  };

  addComment = comment => {
    const {
      comments,
      campaignId,
      typeOfContent,
      slicedCommentsData
    } = this.state;
    const data = {
      comment,
      typeOfContent,
      typeId: campaignId
    };
    this.props.addComment(data).then(() => {
      if (this.props.addedComment) {
        const commentData = {
          id: this.props.addedComment.id,
          comment: this.props.addedComment.comment,
          username: this.props.addedComment.userName,
          userId: this.props.addedComment.userId,
          profileImage: this.props.addedComment.profileImage,
          date: this.props.addedComment.createdAt
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

  handleUpdateSetState = (value, cd) => {
    this.setState(
      { updateForm: { ...this.state.updateForm, comment: value } },
      () => cd()
    );
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
    const { comments } = this.state;

    reportTips = [
      {
        name: Translations.tool_tips.edit,
        handleEvent: this.handleEditComment
      },
      {
        name: comments[comments.findIndex(i => i.id === id)].isReported
          ? Translations.tool_tips.unreport_comment
          : Translations.tool_tips.report_comment,
        handleEvent: this.handleReportPost
      },
      { name: Translations.tool_tips.delete, handleEvent: this.handleDelete }
    ];

    return (
      <RenderToolTips
        items={reportTips}
        id={id}
        isLoading={this.props.isLoading}
      />
    );
  };

  renderEditComment = comment => {
    const { updateForm, isEmoji } = this.state;
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

  renderComment = comment => {
    return (
      <div className="comment-wrapper" key={comment.id}>
        <div className="comment-header">
          <div className="no-padding profile_image">
            <img
              src={comment.profileImage}
              alt={`comment-${comment.id}`}
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-7 col-md-9 col-xs-7 commenter-info">
            <b>{comment.userName}</b> {comment.createdAt} <b>Reply</b>
          </div>
          <div className="col-sm-3 col-md-2 col-xs-2 show_more_options pull-right">
            <ThreeDots
              id="comment"
              role="button"
              dataTip="tooltip"
              dataClass="tooltip-wrapr"
              /* eslint-disable */ getContent={() =>
                this.renderReportTips(comment.id)
              }
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
          <div className="col-md-11"><div className="comment-inner-wrap">{this.renderEditComment(comment)}</div></div>
        </div>
      </div>
    );
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, comment: value } }, () => cd());
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.form.comment !== "") {
      this.addComment(this.state.form.comment);
      this.commentForm.current.reset();
      this.setState({
        form: { ...this.state.form, comment: "", currentComment: "" }
      });
    }
  };

}

const mapStateToProps = state => ({
  comments: state.commentData.comments,
  addedComment: state.commentData.comment,
  isLoading: state.commentData.isLoading,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  addComment,
  deleteComment,
  editComment,
  addReport,
  getComments
};

Comments.propTypes = {
  campaign: PropTypes.any,
  item: PropTypes.any,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
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
  getComments: PropTypes.func,
  comments: PropTypes.any,
  addedComment: PropTypes.any,
  campaignComments: PropTypes.any,
  userImage: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
