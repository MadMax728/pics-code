import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { findDOMNode } from "react-dom";
import { hash_tag_list, username_list } from "../../../mock-data";
import { ToolTip } from "../../ui-kit";
import ReactTooltip from "react-tooltip";
import { HashTag, Username } from "../../common";
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

  onKeyHandle = () => {};

  handleChangeField = e => {
    const commentArr = e.target.value.split(" ");
    const lastText = commentArr[commentArr.length - 1];
    /* eslint-disable */

    ReactTooltip.hide(findDOMNode(this.refs.comments_hash_tag));
    ReactTooltip.hide(findDOMNode(this.refs.comments_username));
    if (lastText.charAt(0) === "#") {
      this.setState(
        {
          form: { ...this.state.form, comment: e.target.value }
        },
        () => {
          /* eslint-disable */

          ReactTooltip.show(findDOMNode(this.refs.comments_hash_tag));
        }
      );
    } else if (lastText.charAt(0) === "@") {
      this.setState(
        {
          form: { ...this.state.form, comment: e.target.value }
        },
        () => {
          /* eslint-disable */

          ReactTooltip.show(findDOMNode(this.refs.comments_username));
        }
      );
    } else {
      this.setState({
        form: { ...this.state.form, comment: e.target.value }
      });
    }
  };

  renderComment = comment => {
    return (
      <div className="comment-wrapper" key={comment.comment_id}>
        <div className="comment-header">
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.props.campaign.id, this.refs.comment.value);
    this.refs.commentForm.reset();
    this.setState({ form: { ...this.state.form, comment: "" } });
  };

  handleSetSatetToolTipHashTag = form => {
    this.setState(
      {
        form: { ...form, comment: form.comment }
      },
      () => {
        /* eslint-disable */

        ReactTooltip.hide(findDOMNode(this.refs.comments_hash_tag));
      }
    );
  };

  handleSetSatetToolTipUsername = form => {
    this.setState(
      {
        form: { ...form, comment: form.comment }
      },
      () => {
        /* eslint-disable */

        ReactTooltip.hide(findDOMNode(this.refs.comments_username));
      }
    );
  };

  renderHashTagTips = () => {
    return (
      <HashTag
        form={this.state.form}
        handleSetSatetToolTipHashTag={this.handleSetSatetToolTipHashTag}
      />
    );
  };

  renderUserNameTips = () => {
    return (
      <Username
        form={this.state.form}
        handleSetSatetToolTipUsername={this.handleSetSatetToolTipUsername}
      />
    );
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
                  <input
                    className="form-control"
                    type="text"
                    ref="comment"
                    id="comment"
                    placeholder="Write a comment"
                    name="comment"
                    onChange={this.handleChangeField}
                    value={form.comment}
                  />
                  <div
                    data-for="comments_hash_tag"
                    role="button"
                    data-tip="tooltip"
                    ref="comments_hash_tag"
                  />
                  <div
                    data-for="comments_username"
                    role="button"
                    data-tip="tooltip"
                    ref="comments_username"
                  />
                  <input type="submit" hidden />
                </div>
              </div>
            </div>
            <div className="col-sm-1 col-xs-2 emoji_wrapper">
              <img src={images.emoji} alt="like" className="pull-right" />
            </div>
          </form>
          <ToolTip
            id="comments_hash_tag"
            getContent={this.renderHashTagTips}
            effect="solid"
            delayHide={0}
            delayShow={0}
            delayUpdate={0}
            place={"bottom"}
            border={true}
            type={"light"}
          />

          <ToolTip
            id="comments_username"
            getContent={this.renderUserNameTips}
            effect="solid"
            delayHide={0}
            delayShow={0}
            delayUpdate={0}
            place={"bottom"}
            border={true}
            type={"light"}
          />
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
