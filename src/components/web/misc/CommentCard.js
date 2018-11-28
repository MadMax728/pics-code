import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { RenderToolTips, HashTagUsername } from "../../common";
import { ThreeDots } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import { addComment, deleteComment } from "../../../actions";
import { connect } from "react-redux";
import moment from "moment";

class CommentCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: this.props.item,
      comments: this.props.item,
      itemId: this.props.itemId,
      typeOfContent: this.props.typeContent,
      form: {
        comment: ""
      },
      ReportTips: [
        {
          name: "Report Comment",
          handleEvent: this.handleReportPost
        },
        {
          name: "Delete",
          handleEvent: this.handleDelete
        }
      ]
    };
  }

  handleReportPost = () => {};

  addComment = (comment) => {
    const { comments, itemId, typeOfContent } = this.state;
    const data = {
      comment: comment,
      typeOfContent: typeOfContent,
      typeId: itemId
    }
    this.props.addComment(data).then(()=> { 
        const commentData = {
          id: this.props.comment.id,
          comment: this.props.comment.comment,
          username: this.props.comment.userName,
          userId: this.props.comment.userId,
          profileImage: this.props.comment.profileImage,
          date: this.props.comment.createdAt
        }
      comments.unshift(commentData);
      this.setState({ comments });
      this.props.handleComment(true);
    })
  };

  handleDelete = e => {
    const id = e.target.id;
    const comments = this.state.comments;

    const indexOf = comments.findIndex(c => {
      return c.id === id;
    });

    if (indexOf !== -1) {
      const data = {
        id: id
      }
      this.props.deleteComment(data).then(()=> {
        comments.splice(indexOf, 1);
        this.props.handleComment(false);
      })

    }
    this.setState({ comments });
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
        <div className="comment-header col-xs-12 no-padding">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={comment.profileImage}
              alt={`comment-${comment.id}`}
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-10 col-md-9 col-xs-7 commenter-info">
            <b>{comment.userName}</b> {moment(comment.createdAt).format('MMMM Do YYYY')} <b>Reply</b>
          </div>
          <div className="col-sm-12 col-md-2 col-xs-2 show_more_options">
            <ThreeDots
              id="comment"
              role="button"
              dataTip="tooltip"
              dataClass="tooltip-wrapr"
              /* eslint-disable */
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
      this.addComment(this.state.form.comment);
      /* eslint-disable */
      this.refs.commentForm.reset();
      this.setState({ form: { ...this.state.form, comment: "" } });
    }
  };

  render() {
    const { item, form, comments } = this.state;

    return (
      <div className="feed-comment" id={item.id}>
        <div className="comment-wrapper">
          <form onSubmit={this.handleSubmit} ref="commentForm">
            <div className="col-sm-1 col-xs-1 no-padding profile_image">
              <img
                src={images.image}
                alt="image1"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-10 col-xs-7 no-padding">
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
            <div className="col-sm-1 col-xs-2 emoji_wrapper">
              <img src={images.emoji} alt="like" className="pull-right" />
            </div>
            <input type="submit" hidden />
          </form>
        </div>

        {comments.length !== 0 && comments.map(this.renderComment)}

        <div className="view-more-comments">
          <Link to={""}>{Translations.view_more_comments}</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comment: state.commentData.comment
});

const mapDispatchToProps = {
  addComment,
  deleteComment
};


CommentCard.propTypes = {
  item: PropTypes.any,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  comment: PropTypes.any,
  typeContent: PropTypes.any,
  itemId: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCard);
