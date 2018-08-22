import React from "react";
import PropTypes from "prop-types";
import * as images from "../../constants/images";

const FeedHeader = ({ campaign }) => {
  return (
    <div className="feed_header">
      <div className="no-padding profile_image">
        {campaign.user &&
          campaign.user.image && (
            <img
              src={campaign.user.image}
              alt="feed"
              className="img-circle img-responsive"
            />
          )}
        {(!campaign || !campaign.user || !campaign.user.image) && (
          <img
            src={images.image}
            alt="feed"
            className="img-circle img-responsive"
          />
        )}
      </div>
      <div className="no-padding titles_wrapper">
        <div className="normal_title">{campaign.title}</div>
        <div className="secondary_title">{campaign.user.name}</div>
        <div className="grey_title">{campaign.category}</div>
      </div>
      <div className="like_wrapper">
        <img src={images.blue_heart} alt="like" className="pull-right" />
      </div>
    </div>
  );
};

FeedHeader.propTypes = {
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

export default FeedHeader;
