import React, { Component } from "react";
import * as images from "../../constants/images";

class Campaign extends Component {
  render() {
    return (
      <div>
        <div className="feed_wrapper">
          <div className="feed_header">
            <div className="col-sm-1 col-xs-1 no-padding profile_image">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-9 col-xs-7 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
            <div className="col-sm-2 col-xs-2 like_wrapper">
              <img src={images.blue_heart} alt="like" className="pull-right" />
            </div>
          </div>
          <div className="feed_content">
            <div className="feed_image">
              <img
                src={images.image}
                alt="altmage"
                className="img-responsive"
              />
            </div>
            <div className="feed_description padding-15">
              <span className="secondary_title">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...`}
              </span>
            </div>
          </div>
          <div className="feed_footer padding-15">
            <div className="messages">
              <span className="count">100</span>
              <img src={images.feed_msg} alt="profile" />
            </div>
            <div className="likes">
              <span className="count">100</span>
              <img src={images.feed_like} alt="profile" />
            </div>
            <div className="show_more_options">
              <a href="/">• • •</a>
            </div>
          </div>
        </div>
        <div className="feed_wrapper">
          <div className="feed_header">
            <div className="col-sm-1 col-xs-1 no-padding profile_image">
              <img
                src={images.image}
                alt="altmage"
                className="img-circle img-responsive"
              />
            </div>
            <div className="col-sm-9 col-xs-7 no-padding">
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
            </div>
            <div className="col-sm-2 col-xs-2 like_wrapper">
              <img src={images.blue_heart} alt="like" className="pull-right" />
            </div>
          </div>
          <div className="feed_content">
            <div className="feed_image">
              <img
                src={images.image}
                alt="altmage"
                className="img-responsive"
              />
            </div>
            <div className="feed_description padding-15">
              <span className="secondary_title">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...`}
              </span>
            </div>
          </div>
          <div className="feed_footer padding-15">
            <div className="messages">
              <span className="count">100</span>
              <img src={images.feed_msg} alt="like" />
            </div>
            <div className="likes">
              <span className="count">100</span>
              <img src={images.feed_like} alt="like" />
            </div>
            <div className="show_more_options">
              <a href="/">• • •</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Campaign;
