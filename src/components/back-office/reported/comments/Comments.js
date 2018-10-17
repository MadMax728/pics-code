import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReportedSearchBar } from "../../reported-search-bar";
import { comments_list } from "../../../../mock-data";

class Comments extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      comments_detail: comments_list
    };
  }

  render() {
    const { comments_detail } = this.state;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        <div className="feed_wrapper">
          {comments_detail.map((comment, index) => {
            return (
              <div key={index}>
                <div className="feed-comment">
                  <div className="comment-wrapper">
                    <div className="comment-header">
                      <div className="col-sm-1 col-xs-1 no-padding profile_image">
                        <img
                          src={comment.user.image}
                          alt="image1"
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
                      <p>
                        This <Link to={""}>#text</Link> is an example. This text
                        is an example. This text is an example from{" "}
                        <Link to={""}>@Username</Link>. This text is…{" "}
                        <Link to={""} className="read-more">
                          read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="status backoffice-status">
                  <div className="status-wrapper">
                    <div className="title">Date</div>
                    <div className="subtitle">{comment.date}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Reports</div>
                    <div className="subtitle">{comment.reports}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Status</div>
                    <div className="subtitle">{comment.status}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Comments;
