import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../lib/constants/images";

class Company extends Component {
  render() {
    return (
      <div className={"padding-rl-10 middle-section"}>
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
              <div className="normal_title">Title of campaigns</div>
              <div className="secondary_title">User name</div>
              <div className="grey_title">01.01.2000 in Category</div>
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
              <img src={images.image} alt="image2" className="img-responsive" />
            </div>
            <div className="feed_description padding-10">
              <div className="normal_title">Title</div>
              <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                  <span className="normal_title">Start: </span>
                  <span className="secondary_title">10.10.2000</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Procedure: </span>
                  <span className="secondary_title">Public</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Target group: </span>
                  <span className="secondary_title">Female</span>
                </div>
              </div>
              <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                  <span className="normal_title">End: </span>
                  <span className="secondary_title">10.10.2000</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Type: </span>
                  <span className="secondary_title">Video</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Applications: </span>
                  <span className="secondary_title">2000/2000</span>
                </div>
              </div>
              <hr />
              <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                  <span className="normal_title">Offer: </span>
                  <span className="secondary_title">Payment</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Inquiry: </span>
                  <span className="secondary_title">Custome Work</span>
                </div>
              </div>
              <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                  <span className="normal_title">Offer Tag: </span>
                  <span className="secondary_title">Example</span>
                </div>
                <div className="info_wrapper">
                  <span className="normal_title">Inquiry Tag: </span>
                  <span className="secondary_title">Example</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feed_footer padding-15">
            <div className="messages">
              <span className="count">100</span>
              <img src={images.feed_msg} alt={"feed_msg"} />
            </div>
            <div className="likes">
              <span className="count">100</span>
              <img src={images.feed_like} alt={"feed_like"} />
            </div>
            <div className="show_more_options">
              <Link to={""}>• • •</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
