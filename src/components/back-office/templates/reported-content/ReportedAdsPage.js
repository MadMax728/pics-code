import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../lib/constants/images";
import ReportedSearchBar from "../ReportedSearchBar";

const reported_ad_detail = {
  user: {
    name: "Santosh Shinde",
    image: `${images.campaign1}`,
    isOwner: true
  },
  title: "Title of campaigns",
  category: "01.01.2000 in Category",
  image: `${images.image}`,
  desc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
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

const ReportedAdsPage = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <ReportedSearchBar />

      <div className="feed_wrapper">
        <div className="feed_header">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={images.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-9 col-xs-7 no-padding">
            <div className="normal_title">{reported_ad_detail.user.name}</div>
            <div className="grey_title">{reported_ad_detail.category}</div>
          </div>
          <div className="col-sm-2 col-xs-2 like_wrapper">
            <img src={images.blue_heart} alt="like1" className="pull-right" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={images.feed_img}
              alt="image2"
              className="img-responsive"
            />
            <Link to={""} className="more-strip">
              More
            </Link>
          </div>
          <div className="feed_description padding-10">
            <span className="secondary_title">
              {reported_ad_detail.desc}
              <Link to={""} className="read-more">
                read more
              </Link>
            </span>
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count">{reported_ad_detail.msg_count}</span>
            <img src={images.feed_msg} alt="feed_msg" />
          </div>
          <div className="likes">
            <span className="count">{reported_ad_detail.like_count}</span>
            <img src={images.feed_like} alt={"feed_like"} />
          </div>
          <div className="show_more_options">
            <Link to={""}>• • •</Link>
          </div>
        </div>
        <div className="status backoffice-status">
          <div className="status-wrapper">
            <div className="title">Date</div>
            <div className="subtitle">{reported_ad_detail.date}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Reports</div>
            <div className="subtitle">{reported_ad_detail.reports}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Status</div>
            <div className="subtitle">{reported_ad_detail.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedAdsPage;
