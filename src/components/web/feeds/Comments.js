import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { HashTagUsername } from "../../common";
class Comments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaign: this.props.campaign,
      comments: this.props.campaign.comments,
      form: {
        comment: ""
      }
    };
  }

  renderComment = comment => {
    return (
      <div className="comment-wrapper" key={comment.comment_id}>
        <div className="comment-header col-xs-12">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={comment.user.image}
              alt={`comment-${comment.comment_id}`}
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-10 col-md-9 col-xs-7 commenter-info">
            <b>{comment.user.name}</b> {comment.date} <b>Reply</b>
          </div>
          <div className="col-sm-12 col-md-2 col-xs-2 show_more_options">
            <Link to={""}>• • •</Link>
          </div>
        </div>
        <div className="comment-content">
          <p>{comment.comment}</p>
        </div>
      </div>
    );
  };

  handleSetState = (comment, cd) => {
    this.setState({ form: { ...this.state.form, comment: comment } }, () =>
      cd()
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.props.campaign.id, this.state.form.comment);
    /* eslint-disable */
    this.refs.commentForm.reset();
    this.setState({ form: { ...this.state.form, comment: "" } });
  };

  render() {
    const { campaign, form, comments } = this.state;

    return (
      <div className="feed-comment" id={campaign.id}>
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
                    form={form}
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
          <Link to={""}>View more comments</Link>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  campaign: PropTypes.any,
  addComment: PropTypes.func
};

export default Comments;
