import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReportedSearchBar } from "../../reported-search-bar";
import * as images from "../../../../lib/constants/images";
import { videos_b_o_list } from "../../../../mock-data";

class VideosBO extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videos_detail: videos_b_o_list
    };
  }

  render() {
    const { videos_detail } = this.state;

    return (
      <div className="padding-rl-10 middle-section">
        <ReportedSearchBar />
        <div className="feed_wrapper">
          {videos_detail.map((vid, index) => {
            return (
              <div key={index}>
                <div className="feed_header">
                  <div className="col-sm-1 col-xs-1 no-padding profile_image">
                    <img
                      src={vid.user.image}
                      alt="image1"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7 no-padding">
                    <div className="normal_title">{vid.user.name}</div>
                    <div className="grey_title">Sponsored in Category</div>
                    <div className="grey_title">{vid.category}</div>
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
                      src={vid.image}
                      alt="image2"
                      className="img-responsive"
                    />
                  </div>
                  <div className="feed_description padding-10">
                    <span className="secondary_title">
                      {vid.desc}
                      <Link to={""} className="read-more">
                        read more
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="feed_footer padding-15">
                  <div className="messages">
                    <span className="count">{vid.msg_count}</span>
                    <img src={images.feed_msg} alt={"feed_msg"} />
                  </div>
                  <div className="likes">
                    <span className="count">{vid.like_count}</span>
                    <img src={images.feed_like} alt="feed_like" />
                  </div>
                  <div className="show_more_options">
                    <Link to="">• • •</Link>
                  </div>
                </div>
                <div className="status backoffice-status">
                  <div className="status-wrapper">
                    <div className="title">Date</div>
                    <div className="subtitle">{vid.date}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Reports</div>
                    <div className="subtitle">{vid.reports}</div>
                  </div>
                  <div className="status-wrapper">
                    <div className="title">Status</div>
                    <div className="subtitle">{vid.status}</div>
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

export default VideosBO;
