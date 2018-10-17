import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";

import { setting_campaign_list } from "../../../../../mock-data";

class SettingCampaign extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      setting_campaigns: setting_campaign_list
    };
  }

  render() {
    const { isBackOffice } = this.props;
    const { setting_campaigns } = this.state;

    return (
      <div className="padding-rl-10 middle-section">
        <div className="feed_wrapper">
          {setting_campaigns.map((campaign, index) => {
            const profile_route = campaign.user.isOwner
              ? `/news_feed`
              : `/news_feed/${campaign.id}`;
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <Link to={profile_route}>
                      <img
                        src={campaign.user.image}
                        alt={"image1" + index}
                        className="img-circle img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <Link to={"/campaign/" + campaign.id + "/information"}>
                      <div className="normal_title">{campaign.title}</div>
                    </Link>
                    <div className="secondary_title">{campaign.user.name}</div>
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
                      alt={"image2" + index}
                      className="img-responsive"
                    />
                  </div>
                  <div className="feed_description padding-10">
                    <div className="normal_title">{campaign.title}</div>
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
                    <img src={images.feed_msg} alt={"feed_msg1"} />
                  </div>
                  <div className="likes">
                    <span className="count">{campaign.like_count}</span>
                    <img src={images.feed_like} alt="feed_like1" />
                  </div>
                  <div className="show_more_options">
                    <Link to={""}>• • •</Link>
                  </div>
                </div>
                <div className="status">
                  <div className="status-wrapper">
                    <div className="title">Status</div>
                    <div className="subtitle">
                      <span className="green-circle" />
                    </div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Views</div>
                    <div className="subtitle">{campaign.views}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Clicks</div>
                    <div className="subtitle">{campaign.clicks}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Applications</div>
                    <div className="subtitle">{campaign.applications}</div>
                  </div>
                  <div className="status-wrapper">
                    <Link
                      to={
                        isBackOffice
                          ? `/back_office/settings/campaigns/${
                              campaign.id
                            }/statistics`
                          : `/settings/campaigns/${campaign.id}/statistics`
                      }
                    >
                      <button className="blue_button">statistics</button>
                    </Link>
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

SettingCampaign.propTypes = {
  isBackOffice: propTypes.bool.isRequired
};

export default SettingCampaign;
