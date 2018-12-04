import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as images from "../../../lib/constants/images";
import { ReportedSearchBar } from "../reported-search-bar";
import { campaigns_list } from "../../../mock-data";

class Campaigns extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaigns_detail: campaigns_list
    };
  }

  render() {
    const { campaigns_detail } = this.state;

    return (
      <div className="padding-rl-10 middle-section margin-b-22">
        <ReportedSearchBar />
        <div className="feed_wrapper backoffice-feed">
          {campaigns_detail.map((campaign, index) => {
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={campaign.profileImage}
                      alt="image1"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">{campaign.title}</div>
                    <div className="secondary_title">{campaign.userName}</div>
                    <div className="grey_title">{campaign.category}</div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    <img
                      src={images.blue_heart}
                      alt="like"
                      className="pull-right"
                    />
                  </div>
                </div>
                <div className="feed_content">
                  <div className="feed_image">
                    <img
                      src={campaign.image}
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
                          {campaign.start}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">
                          {campaign.procedure}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Target group: </span>
                        <span className="secondary_title">
                          {campaign.target_group}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">{campaign.end}</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">{campaign.type}</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Applications: </span>
                        <span className="secondary_title">
                          {campaign.applications}
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">
                          {campaign.start}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">
                          {campaign.procedure}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">{campaign.end}</span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">{campaign.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feed_footer padding-15">
                  <div className="messages">
                    <span className="count">{campaign.msg_count}</span>
                    <img src={images.feed_msg} alt={"feed_msg"} />
                  </div>
                  <div className="likes">
                    <span className="count">{campaign.like_count}</span>
                    <img src={images.feed_like} alt={"feed_like-2"} />
                  </div>
                  <div className="show_more_options">
                    <Link to="">• • •</Link>
                  </div>
                </div>
                <div className="status">
                  <div className="status-wrapper">
                    <div className="title">Total budget</div>
                    <div className="subtitle">{campaign.total_budget}</div>
                  </div>
                  <div className="status-wrapper pull-right">
                    <div className="title">Status</div>
                    <div className="subtitle">{campaign.status}</div>
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

export default Campaigns;
