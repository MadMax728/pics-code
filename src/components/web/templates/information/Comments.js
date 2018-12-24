import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";
import { ThreeDots } from "../../../ui-kit";
import { RenderToolTips, HashTagUsername } from "../../../common";
import { Translations } from "../../../../lib/translations";

class Comments extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaign: this.props.campaign,
      comments: this.props.campaign.comments,
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

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleReportPost = () => {};

  addComment = (campaignId, comment) => {
    const comments = this.state.comments;
    const commentData = {
      comment_id: parseInt(Math.random()),
      comment,
      user: {
        name: "Vaghela",
        id: 2,
        image: `${images.campaign2}`
      },
      date: "02.02.2000"
    };

    comments.unshift(commentData);

    this.setState({ comments });
  };

  handleDelete = e => {
    const id = e.target.id;
    const comments = this.state.comments;

    const indexOf = comments.findIndex(c => {
      return c.comment_id === parseInt(id);
    });

    if (indexOf !== -1) {
      comments.splice(indexOf, 1);
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
      <div className="comment-wrapper" key={comment.comment_id}>
        <div className="comment-header">
          <div className="no-padding profile_image">
            <img
              src={comment.user.image}
              alt={`comment-${comment.comment_id}`}
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-7 col-md-9 col-xs-7 commenter-info">
            <b>{comment.user.name}</b> {comment.date} <b>Reply</b>
          </div>
          <div className="col-sm-3 col-md-2 col-xs-2 show_more_options pull-right">
            <ThreeDots
              id="comment"
              role="button"
              dataTip="tooltip"
              dataClass="tooltip-wrapr"
              /* eslint-disable */
              getContent={() => this.renderReportTips(comment.comment_id)}
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
    const { campaign, form, comments } = this.state;

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

        {comments && comments.length !== 0 && comments.map(this.renderComment)}

        <div className="view-more-comments">
          <Link to={""}>{Translations.view_more_comments}</Link>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  campaign: PropTypes.any
};

export default Comments;
