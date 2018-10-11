import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import { modalType } from "../../../lib/constants/enumerations";
import propTypes from "prop-types";

class Ads extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ad_detail: {
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
        start: "10.10.2000",
        procedure: "Procedure",
        target_group: "Female",
        end: "10.10.2000",
        type: "Video",
        applications: "2000/2000",
        total_budget: "500€",
        status: "Processed",
        id: 1
      }
    };
  }

  handleProcessed = () => {
    this.props.handleModalInfoShow(modalType.processed);
  };

  onKeyDown = () => {};

  render() {
    const { ad_detail } = this.state;
    return (
      <div className="padding-rl-10 middle-section">
        <div className="middle-section-search">
          <form>
            <div className="input-group search-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
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
        <div className="feed_wrapper">
          <div className="feed_header">
            <div className="col-sm-1 col-xs-1 no-padding profile_image">
              <img
                src={ad_detail.image}
                alt="image1"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-9 col-xs-7 no-padding">
              <div className="normal_title">{ad_detail.user.name}</div>
              <div className="grey_title">{ad_detail.category}</div>
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
              <div className="normal_title">{ad_detail.title}</div>
              <span className="secondary_title">
                {ad_detail.desc}
                <Link to={""} className="read-more">
                  read more
                </Link>
              </span>
            </div>
          </div>
          <div className="feed_footer padding-15">
            <div className="messages">
              <span className="count">{ad_detail.msg_count}</span>
              <img src={images.feed_msg} alt={"image3"} />
            </div>
            <div className="likes">
              <span className="count">{ad_detail.like_count}</span>
              <img src={images.feed_like} alt={"feed_like"} />
            </div>
            <div className="show_more_options">
              <div
                role={"button"}
                tabIndex="0"
                onClick={this.handleProcessed}
                onKeyDown={this.onKeyDown}
              >
                • • •
              </div>
            </div>
          </div>
          <div className="status">
            <div className="status-wrapper">
              <div className="title">Start</div>
              <div className="subtitle">{ad_detail.start}</div>
            </div>
            <div className="status-wrapper">
              <div className="title">End</div>
              <div className="subtitle">{ad_detail.end}</div>
            </div>
            <div className="status-wrapper">
              <div className="title">Daily budget</div>
              <div className="subtitle">{ad_detail.total_budget}</div>
            </div>
            <div className="status-wrapper">
              <div className="title">Clicks</div>
              <div className="subtitle">{ad_detail.clicks}</div>
            </div>
            <div className="status-wrapper">
              <div className="title">Status</div>
              <div className="subtitle">{ad_detail.status}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Ads.propTypes = {
  handleModalInfoShow: propTypes.func
};

export default Ads;
