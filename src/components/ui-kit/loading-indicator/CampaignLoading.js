import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";

class CampaignLoading extends React.Component {
  render() {
    return (
      <div className="feed_wrapper">
        <div className="feed_header">
          <div className="no-padding profile_image wid45">
            <img
              src={images.profile_pic_gray}
              alt="prof_img"
              className="img-circle img-responsive profile_pic_gray"
            />
          </div>
          <div className="col-sm-8 col-xs-7 no-padding">
            <div className="normal_title gray_box" />
            <div className="secondary_title gray_box desc1" />
            <div className="grey_title" />
          </div>
          <div className="col-sm-1 col-xs-1 like_wrapper no-padding">
            <img
              src={images.gray_heart}
              alt="like"
              className="pull-right gray_heart"
            />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <img
              src={images.placeholder_pic}
              alt="feed_image"
              className="img-responsive profile_pic_gray big gray_box"
            />
          </div>
          <div className="feed_description">
            <span className="secondary_title gray_box gray_box_big desc1" />
          </div>
          <div className="feed_description">
            <span className="secondary_title gray_box gray_box_big desc2" />
          </div>
          <div className="feed_description">
            <span className="secondary_title gray_box gray_box_big desc3" />
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count gray_box" />
            {/* <img src={images.feed_msg} alt="message" /> */}
          </div>
          <div className="likes">
            <span className="count gray_box" />
            {/* <img src={images.gray_heart} alt="like" /> */}
          </div>
          <div className="show_more_options">
            <Link to={""} className="gray">
              • • •
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignLoading;
