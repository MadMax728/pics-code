import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import { modalType } from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";
import { backoffice_ads_list } from "../../../mock-data";
import { ReportedSearchBar } from "../reported-search-bar";

class Ads extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ads_detail: backoffice_ads_list
    };
  }

  handleProcessed = () => {
    this.props.handleModalInfoShow(modalType.processed);
  };

  onKeyDown = () => {};

  render() {
    const { ads_detail } = this.state;

    return (
      <div className="padding-rl-10 middle-section margin-b-22">
        <ReportedSearchBar />
        <div className="feed_wrapper">
          {ads_detail.map((ad, index) => {
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
                      alt={"image2" + index}
                      className="img-responsive"
                    />
                    <Link to={""} className="more-strip">
                      More
                    </Link>
                  </div>
                  <div className="feed_description padding-10">
                    <div className="normal_title">{ad.title}</div>
                    <span className="secondary_title">
                      {ad.desc}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="feed_footer padding-15">
                  <div className="messages">
                    <span className="count">{ad.msg_count}</span>
                    <img src={images.feed_msg} alt={"image3"} />
                  </div>
                  <div className="likes">
                    <span className="count">{ad.like_count}</span>
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
                    <div className="subtitle">{ad.start}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">End</div>
                    <div className="subtitle">{ad.end}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Daily budget</div>
                    <div className="subtitle">{ad.total_budget}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Clicks</div>
                    <div className="subtitle">{ad.clicks}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Status</div>
                    <div className="subtitle">{ad.status}</div>
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

Ads.propTypes = {
  handleModalInfoShow: PropTypes.func
};

export default Ads;
