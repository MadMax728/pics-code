import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import FeedHeader from "./FeedHeader";

const Feed = ({ campaign }) => {
  return (
    <div className="feed_wrapper">
      <FeedHeader campaign={campaign} />
      <div className="feed_content">
        {campaign &&
          campaign.image && (
            <div className="feed_image">
              <div className="embed-responsive embed-responsive-16by9">
                <div className="img-responsive embed-responsive-item">
                  <img src={campaign.image} alt="altmage" />
                </div>
              </div>
            </div>
          )}
        {campaign &&
          campaign.desc && (
            <div className="feed_description padding-15">
              <span className="secondary_title">{campaign.desc}</span>
            </div>
          )}
      </div>
      <div className="feed_footer padding-15">
        <div className="messages">
          <span className="count">{campaign.msg_count}</span>
          <img src={images.feed_msg} alt="profile" />
        </div>
        <div className="likes">
          <span className="count">{campaign.like_count}</span>
          <img src={images.feed_like} alt="profile" />
        </div>
        <div className="show_more_options">
          <div>• • •</div>
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  campaign: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string
    }).isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    msg_count: PropTypes.number,
    like_count: PropTypes.number
  }).isRequired
};

export default Feed;
