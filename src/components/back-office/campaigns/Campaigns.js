import React from "react";
import { Link } from "react-router-dom";

import * as images from "../../../lib/constants/images";

const campaign_detail = {
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
  procedure: "Procedure",
  target_group: "Female",
  end: "10.10.2000",
  type: "Video",
  applications: "2000/2000",
  total_budget: "500€",
  status: "Processed",
  id: 1
};

const Campaigns = () => {
  return (
    <div className="padding-rl-10 middle-section margin-b-22">
      <div className="middle-section-search">
        <form>
          <div className="input-group search-input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-addon">
              <button type="submit">
                <span className="search_icon">
                  <img src={images.search} alt="Search" />
                </span>
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="feed_wrapper backoffice-feed">
        <div className="feed_header">
          <div className="col-sm-1 col-xs-1 no-padding profile_image">
            <img
              src={campaign_detail.user.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-9 col-xs-7 no-padding">
            <div className="normal_title">{campaign_detail.title}</div>
            <div className="secondary_title">{campaign_detail.user.name}</div>
            <div className="grey_title">{campaign_detail.category}</div>
          </div>
          <div className="col-sm-2 col-xs-2 like_wrapper">
            <img src={images.blue_heart} alt="like" className="pull-right" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={campaign_detail.image}
              alt="image2"
              className="img-responsive"
            />
          </div>
          <div className="feed_description padding-10">
            <div className="normal_title">Title</div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">Start: </span>
                <span className="secondary_title">{campaign_detail.start}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Procedure: </span>
                <span className="secondary_title">
                  {campaign_detail.procedure}
                </span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Target group: </span>
                <span className="secondary_title">
                  {campaign_detail.target_group}
                </span>
              </div>
            </div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">End: </span>
                <span className="secondary_title">{campaign_detail.end}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Type: </span>
                <span className="secondary_title">{campaign_detail.type}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Applications: </span>
                <span className="secondary_title">
                  {campaign_detail.applications}
                </span>
              </div>
            </div>
            <hr />
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">Start: </span>
                <span className="secondary_title">{campaign_detail.start}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Procedure: </span>
                <span className="secondary_title">
                  {campaign_detail.procedure}
                </span>
              </div>
            </div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">End: </span>
                <span className="secondary_title">{campaign_detail.end}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">Type: </span>
                <span className="secondary_title">{campaign_detail.type}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count">{campaign_detail.msg_count}</span>
            <img src={images.feed_msg} alt={"feed_msg"} />
          </div>
          <div className="likes">
            <span className="count">{campaign_detail.like_count}</span>
            <img src={images.feed_like} alt={"feed_like-2"} />
          </div>
          <div className="show_more_options">
            <Link to="">• • •</Link>
          </div>
        </div>
        <div className="status">
          <div className="status-wrapper">
            <div className="title">Total budget</div>
            <div className="subtitle">{campaign_detail.total_budget}</div>
          </div>
          <div className="status-wrapper pull-right">
            <div className="title">Status</div>
            <div className="subtitle">{campaign_detail.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
