import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../../lib/constants/images";
import * as routes from "../../../../../lib/constants/routes";

class Ads extends Component {
  render() {
    return (
      <div>
        <div className="padding-rl-10 middle-section">
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
                <div className="normal_title">User name</div>
                <div className="grey_title">Sponsored in Category</div>
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
                  src={images.feed_img}
                  alt="feed_img1"
                  className="img-responsive"
                />
                <Link to={""} className="more-strip">
                  More
                </Link>
              </div>
              <div className="feed_description padding-10">
                <div className="normal_title">Title</div>
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
                <span className="count">100</span>
                <img src={images.feed_msg} alt={"feed_msg"} />
              </div>
              <div className="likes">
                <span className="count">100</span>
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
                <div className="subtitle">700</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Clicks</div>
                <div className="subtitle">20</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Applications</div>
                <div className="subtitle">0</div>
              </div>
              <div className="status-wrapper">
                <Link to={routes.SETTINGS_ADS_STATISTICS_ROUTE}>
                  <button className="blue_button">statistics</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="col-sm-1 col-xs-1 no-padding profile_image">
                <img
                  src={images.image}
                  alt="image3"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="col-sm-9 col-xs-7 no-padding">
                <div className="normal_title">User name</div>
                <div className="grey_title">Sponsored in Category</div>
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
                  src={images.feed_img}
                  alt="feed_img2"
                  className="img-responsive"
                />
                <span className="more-strip">More</span>
              </div>
              <div className="feed_description padding-10">
                <div className="normal_title">Title</div>
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
                <span className="count">100</span>
                <img src={images.feed_msg} alt={"feed_msg2"} />
              </div>
              <div className="likes">
                <span className="count">100</span>
                <img src={images.feed_like} alt={"feed_like2"} />
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
                <div className="subtitle">700</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Clicks</div>
                <div className="subtitle">20</div>
              </div>
              <div className="status-wrapper">
                <div className="title">Applications</div>
                <div className="subtitle">0</div>
              </div>
              <div className="status-wrapper">
                <Link to={routes.SETTINGS_ADS_STATISTICS_ROUTE}>
                  <button className="blue_button">statistics</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right_bar no-padding pull-left">
          <div className="campaigns-right">
            <button className="blue_button">Create ad</button>
            <button className="blue_button">What are ads? </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ads;
