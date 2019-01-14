import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";
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

class Comments extends Component {
  constructor(props, context) {
    super(props, context);
    let reportTips;
    reportTips = [
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
      comments: "",
      item: this.props.item,
      itemId: this.props.itemId,
      typeOfContent: this.props.typeContent,
      minRange: 0,
      maxRange: 2,
      slicedCommentsData: null,
      form: { id: null, comment: "" },
      updateForm: { comment: "" },
      ReportTips: reportTips
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.handleCommentsSections();
  };

  handleReportPost = () => {};

  handleCommentsSections = () => {
    const CampaignId = { typeId: this.props.campaign.id };
    this.props.getComments(CampaignId).then(() => {
      const totalComment = this.props.comments;
      const commentData = this.props.comments.slice(0, 2);
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: totalComment.length,
        slicedCommentsData: commentData,
        maxRange: 2
      });
    });
  };

  addComment = comment => {
    const { comments, itemId, typeOfContent, slicedCommentsData } = this.state;
    const data = {
      comment,
      typeOfContent,
      typeId: itemId
    };
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
    return <RenderToolTips items={this.state.ReportTips} id={id} />;
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
        <div className="comment-content">
          <p>{comment.comment}</p>
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
      this.addComment(this.props.campaign.id, this.state.form.comment);
      /* eslint-disable */
      this.refs.commentForm.reset();
      this.setState({ form: { ...this.state.form, comment: "" } });
    }
  };

  render() {
    const {
      campaign,
      form,
      comments,
      item,
      slicedCommentsData,
      totalCommentsCount
    } = this.state;
    const { isLoading, isReport } = this.props;
    return (
      <div className="feed-comment" id={campaign.id}>
        <div className="comment-wrapper">
          <form onSubmit={this.handleSubmit} ref="commentForm">
            <div className="no-padding profile_image">
              <img
                src={images.image}
                alt="image1"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-7 col-xs-7 no-padding">
              <div className="comment-input">
                <div className="form-group">
                  <HashTagUsername
                    className="form-control"
                    type="text"
                    placeholder="Write a comment"
                    name="comment"
                    handleSetState={this.handleSetState}
                    value={form.comment}
                    isText
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-xs-2 emoji_wrapper pull-right">
              <img src={images.emoji} alt="like" className="pull-right" />
            </div>
            <input type="submit" hidden />
          </form>
        </div>

        {!isReport &&
          this.state.totalCommentsCount !== 0 &&
          this.state.slicedCommentsData &&
          this.state.slicedCommentsData.map(this.renderComment)}

        {!isReport && this.state.totalCommentsCount > this.state.maxRange && (
          <div
            className="view-more-comments view-more-link"
            id="7"
            onClick={this.handleViewComment}
          >
            {Translations.view_more_comments}
          </div>
        )}

        {!isReport &&
          this.state.totalCommentsCount > 2 &&
          this.state.totalCommentsCount < this.state.maxRange && (
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
  comments: state.commentData.comments,
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
  getComments: PropTypes.func,
  comments: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
