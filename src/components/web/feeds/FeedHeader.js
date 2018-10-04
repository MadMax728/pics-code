import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";

class FeedHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleOnKeyDown = () => {};

  render() {
    const { campaign } = this.props;
    const profile_route = campaign.user.isOwner
      ? `/news_feed`
      : `/news_feed/${campaign.id}`;
    return (
      <div className="feed_header">
        <div className="no-padding profile_image">
          {campaign.user &&
            campaign.user.image && (
              <Link to={profile_route}>
                <img
                  src={campaign.user.image}
                  alt="feed"
                  className="img-circle img-responsive"
                />
              </Link>
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
          <Link to={"/campaign/" + campaign.id + "/information"}>
            <div className="normal_title">{campaign.title}</div>
          </Link>
          <div className="secondary_title">{campaign.user.name}</div>
          <div className="grey_title">{campaign.category}</div>
        </div>
        <div className="like_wrapper">
          <img src={images.blue_heart} alt="like" className="pull-right" />
        </div>
      </div>
    );
  }
}

FeedHeader.propTypes = {
  campaign: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      isOwner: PropTypes.bool
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
