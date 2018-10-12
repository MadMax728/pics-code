import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../lib/constants/images";
import { company_campaigns_list } from "../../../../mock-data";

class Company extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      company_campaigns: company_campaigns_list
    };
  }
  render() {
    const { company_campaigns } = this.state;

    return (
      <div className={"padding-rl-10 middle-section"}>
        <div className="feed_wrapper">
          {company_campaigns.map((campaign, index) => {
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={campaign.user.image}
                      alt={campaign.user.image}
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">{campaign.title}</div>
                    <div className="secondary_title">{campaign.user.name}</div>
                    <div className="grey_title">{campaign.category}</div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    <img
                      src={images.blue_heart}
                      alt="blue_heart"
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
                    <div className="normal_title">{campaign.title}</div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">
                          {campaign.title}
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
                        <span className="normal_title">Offer: </span>
                        <span className="secondary_title">
                          {campaign.offer}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Inquiry: </span>
                        <span className="secondary_title">
                          {campaign.inquiry}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Offer Tag: </span>
                        <span className="secondary_title">
                          {campaign.offer_tag}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Inquiry Tag: </span>
                        <span className="secondary_title">
                          {campaign.inquiry_tag}
                        </span>
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
                    <img src={images.feed_like} alt={"feed_like"} />
                  </div>
                  <div className="show_more_options">
                    <Link to={""}>• • •</Link>
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

export default Company;
