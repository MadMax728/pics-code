import React from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";

const CampaignLoading = ({ count }) => {
  return Array(count)
    .fill()
    .map((item, index) => {
      return (
        <div key={index} className="feed_wrapper">
          <div className="feed_header">
            <div className="no-padding profile_image wid45">
              <span className="gray_box pro-image" />
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
            </div>
            <div className="likes">
              <span className="count gray_box" />
            </div>
            <div className="show_more_options gray">• • •</div>
          </div>
        </div>
      );
    });
};

CampaignLoading.defaultProps = {
  count: 3
};

CampaignLoading.propTypes = {
  count: PropTypes.number
};

export default CampaignLoading;
