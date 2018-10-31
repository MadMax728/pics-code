import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";
import { hash_tag_list, username_list } from "../../../mock-data";

class Comments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaign: this.props.campaign,
      comments: this.props.campaign.comments,
      hashTagList: hash_tag_list,
      userNameList: username_list,
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

  _commentsCbHashTag = item => {
    const hashtag = item.hashtag;
    //hashtag = hash_tag_list.filter
    const { form } = this.state;
    const commentArr = form.comment.split(" ");
    commentArr.pop();
    form.comment = commentArr.join(" ") + " #" + hashtag;
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

  renderHashTagTips = () => {
    let { hashTagList, form } = this.state;
    const commentArr = form.comment.split(" ");
    const lastText = commentArr[commentArr.length - 1].substring(1);
    hashTagList = hashTagList.filter(item => {
      return !!(
        lastText === "#" ||
        lastText === "" ||
        item.hashtag.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });
    return (
      <div>
        {hashTagList.map((item, index) => {
          return (
            /* eslint-disable */
            <div
              key={"Commnet_" + item.id}
              onClick={() => {
                this._commentsCbHashTag(item);
              }}
              id={item.id}
              onKeyDown={this.onKeyHandle}
            >
              <div>{item.hashtag}</div>
              <div>{item.posts}</div>
            </div>
          );
        })}
      </div>
    );
  };

  _commentsCbUserName = item => {
    const username = item.username;
    //hashtag = hash_tag_list.filter
    const { form } = this.state;
    const commentArr = form.comment.split(" ");
    commentArr.pop();
    form.comment = commentArr.join(" ") + " @" + username;
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

  renderUserNameTips = () => {
    let { userNameList, form } = this.state;
    const commentArr = form.comment.split(" ");
    const lastText = commentArr[commentArr.length - 1].substring(1);
    userNameList = userNameList.filter(item => {
      return !!(
        lastText === "@" ||
        lastText === "" ||
        item.username.toLowerCase().indexOf(lastText.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });
    return (
      <div>
        {userNameList.map((item, index) => {
          return (
            /* eslint-disable */
            <div
              key={"Commnet_" + item.id}
              onClick={() => {
                this._commentsCbUserName(item);
              }}
              id={item.id}
              onKeyDown={this.onKeyHandle}
            >
              <div>
                <img
                  src={item.image}
                  alt={"image" + `${item.name}`}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
              <div>{item.username}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
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
          <ReactTooltip
            id="comments_hash_tag"
            getContent={this.renderHashTagTips}
            effect="solid"
            place={"bottom"}
            border={true}
            type={"light"}
          />

          <ReactTooltip
            id="comments_username"
            getContent={this.renderUserNameTips}
            effect="solid"
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
