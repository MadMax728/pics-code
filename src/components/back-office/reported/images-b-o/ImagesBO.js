import React from "react";
import { Link } from "react-router-dom";
import { ReportedSearchBar } from "../reported-search-bar";
import * as images from "../../../../lib/constants/images";

const image_detail = {
  user: {
    name: "Santosh Shinde",
    image: `${images.campaign1}`,
    isOwner: true
  },
  title: "Title of campaigns",
  category: "01.01.2000 in Category",
  image: `${images.image}`,
  clicks: 25,
  desc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  msg_count: 12,
  like_count: 12,
  date: "10.10.2000",
  procedure: "Procedure",
  reports: "2",
  status: "Outstanding",
  id: 1
};

const ImagesBO = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <ReportedSearchBar />
      <div className="feed_wrapper">
        <div className="feed_header">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={image_detail.user.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-9 col-xs-7 no-padding">
            <div className="normal_title">{image_detail.user.name}</div>
            <div className="grey_title">Sponsored in Category</div>
            <div className="grey_title">{image_detail.category}</div>
          </div>
          <div className="col-sm-2 col-xs-2 like_wrapper">
            <img src={images.blue_heart} alt="like" className="pull-right" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={image_detail.image}
              alt="image2"
              className="img-responsive"
            />
          </div>
          <div className="feed_description padding-10">
            <span className="secondary_title">
              {image_detail.desc}
              <Link to={""} className="read-more">
                read more
              </Link>
            </span>
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count">{image_detail.msg_count}</span>
            <img src={images.feed_msg} alt={"feed_msg"} />
          </div>
          <div className="likes">
            <span className="count">{image_detail.like_count}</span>
            <img src={images.feed_like} alt="feed_like" />
          </div>
          <div className="show_more_options">
            <Link to="">• • •</Link>
          </div>
        </div>
        <div className="status backoffice-status">
          <div className="status-wrapper">
            <div className="title">Date</div>
            <div className="subtitle">{image_detail.date}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Reports</div>
            <div className="subtitle">{image_detail.reports}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Status</div>
            <div className="subtitle">{image_detail.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesBO;
