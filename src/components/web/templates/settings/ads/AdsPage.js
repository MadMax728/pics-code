import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../../lib/constants/images";
import { setting_ads_list } from "../../../../../mock-data";

class AdsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      setting_ads: setting_ads_list
    };
  }

  render() {
    const { setting_ads } = this.state;
    return (
      <div className="padding-rl-10 middle-section">
        <div className="feed_wrapper">
          {setting_ads.map((ad, index) => {
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={ad.user.image}
                      alt={"image1" + index}
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">{ad.user.name}</div>
                    <div className="grey_title">{ad.category}</div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    <img
                      src={images.blue_heart}
                      alt="like1"
                      className="pull-right"
                    />
                  </div>
                </div>
                <div className="feed_content">
                  <div className="feed_image">
                    <img
                      src={ad.image}
                      alt={"feed_img1" + index}
                      className="img-responsive"
                    />
                    <Link to={""} className="more-strip zIndex0">
                      More
                    </Link>
                  </div>
                  <div className="feed_description padding-10">
                    <div className="normal_title">{ad.title}</div>
                    <span className="secondary_title">
                      {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="feed_footer padding-15">
                  <div className="messages">
                    <span className="count">{ad.msg_count}</span>
                    <img src={images.feed_msg} alt={"feed_msg"} />
                  </div>
                  <div className="likes">
                    <span className="count">{ad.like_count}</span>
                    <img src={images.feed_like} alt={"feed_like3"} />
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
                    <div className="subtitle">{ad.views}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Clicks</div>
                    <div className="subtitle">{ad.clicks}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Applications</div>
                    <div className="subtitle">{ad.applications}</div>
                  </div>
                  <div className="status-wrapper">
                    <Link to={`/settings/ads/${ad.id}/statistics`}>
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

export default AdsPage;
