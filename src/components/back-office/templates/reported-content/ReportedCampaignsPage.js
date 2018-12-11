import React from "react";
import { Link } from "react-router-dom";
import ReportedSearchBar from "../ReportedSearchBar";
import * as images from "../../../../lib/constants/images";

const reported_campaign_detail = {
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

const ReportedCampaignsPage = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <ReportedSearchBar />
      <div className="feed_wrapper backoffice-feed">
        <div className="feed_header">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={reported_campaign_detail.user.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-9 col-xs-7 no-padding">
            <div className="normal_title">{reported_campaign_detail.title}</div>
            <div className="secondary_title">
              {reported_campaign_detail.user.name}
            </div>
            <div className="grey_title">
              {reported_campaign_detail.category}
            </div>
          </div>
          <div className="col-sm-2 col-xs-2 like_wrapper">
            <img src={images.blue_heart} alt="like" className="pull-right" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={reported_campaign_detail.image}
              alt="image2"
              className="img-responsive"
            />
          </div>
          <div className="feed_description padding-10">
            <div className="normal_title">Title</div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">Start: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.start}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Procedure: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.procedure}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Target group: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.target_group}
                </span>
              </div>
            </div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">End: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.end}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Type: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.type}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Applications: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.applications}
                </span>
              </div>
            </div>
            <hr />
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">Start: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.start}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Procedure: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.procedure}
                </span>
              </div>
            </div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">End: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.end}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Type: </span>
                <span className="secondary_title">
                  {reported_campaign_detail.type}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count">{reported_campaign_detail.msg_count}</span>
            <img src={images.feed_msg} alt={"feed_msg"} />
          </div>
          <div className="likes">
            <span className="count">{reported_campaign_detail.like_count}</span>
            <img src={images.feed_like} alt={"feed_like-2"} />
          </div>
          <div className="show_more_options">
            <Link to="">• • •</Link>
          </div>
        </div>
        <div className="status backoffice-status">
          <div className="status-wrapper">
            <div className="title">Date</div>
            <div className="subtitle">{reported_campaign_detail.date}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Reports</div>
            <div className="subtitle">{reported_campaign_detail.reports}</div>
          </div>
          <div className="status-wrapper">
            <div className="title">Status</div>
            <div className="subtitle">{reported_campaign_detail.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedCampaignsPage;
