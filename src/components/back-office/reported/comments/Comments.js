import React from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../lib/constants/images";
import { ReportedSearchBar } from "../reported-search-bar";

const comments_detail = {
  user: {
    name: "Santosh Shinde",
    image: `${images.campaign1}`,
    isOwner: true
  },
  msg_count: 12,
  like_count: 12,
  start: "10.10.2000",
  date: "10.10.2000",
  reports: "1",
  procedure: "Procedure",
  target_group: "Female",
  end: "10.10.2000",
  type: "Video",
  applications: "2000/2000",
  total_budget: "500€",
  status: "Processed",
  id: 1
};

const Comments = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <ReportedSearchBar />
      <div className="feed_wrapper">
        <div className="feed-comment">
          <div className="comment-wrapper">
            <div className="comment-header">
              <div className="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src={comments_detail.user.image}
                  alt="image1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="col-sm-10 col-md-9 col-xs-7 commenter-info">
                <b>{comments_detail.user.name}</b> {comments_detail.date}{" "}
                <b>Reply</b>
              </div>
              <div className="col-sm-12 col-md-2 col-xs-2 show_more_options">
                <Link to={""}>• • •</Link>
              </div>
            </div>
            <div className="comment-content">
              <p>
                This <Link to={""}>#text</Link> is an example. This text is an
                example. This text is an example from{" "}
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
            <div className="subtitle">{comments_detail.date}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Reports</div>
            <div className="subtitle">{comments_detail.reports}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Status</div>
            <div className="subtitle">{comments_detail.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
