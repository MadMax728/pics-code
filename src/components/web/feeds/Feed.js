import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import FeedHeader from "./FeedHeader";
import { Link } from "react-router-dom";

class Feed extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  handleFavorite = e => {
    this.props.handleFavorite(e);
  };

  handleMessage = e => {
    this.props.handleFavorite(e);
  };

  handleOnKeyDown = () => {};

  render() {
    const { campaign, handleModalInfoShow, handleFavorite } = this.props;

    return (
      <div className="feed_wrapper">
        <FeedHeader
          campaign={campaign}
          handleModalInfoShow={handleModalInfoShow}
          handleFavorite={handleFavorite}
        />
        <div className="feed_content">
          {campaign &&
            campaign.image && (
              <Link to={`/campaign/${campaign.id}/information`}>
                <div className="feed_image">
                  <div className="embed-responsive embed-responsive-16by9">
                    <div className="img-responsive embed-responsive-item">
                      <img src={campaign.image} alt="altmage" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          {campaign &&
            campaign.desc && (
              <div className="feed_description padding-15">
                <span className="secondary_title">{campaign.desc}</span>
              </div>
            )}
        </div>
        <div className="feed_footer padding-15">
          <div className="messages" role="article">
            <span className="count">{campaign.msg_count}</span>
            <img
              src={images.feed_msg}
              alt="profile"
              onClick={this.handleMessage}
              role="presentation"
              id={campaign.id}
              onKeyDown={this.handleOnKeyDown}
            />
          </div>
          <div className="likes" role="article">
            <span className="count">{campaign.like_count}</span>
            {campaign.isFavorite ? (
              <img
                src={images.blue_heart}
                alt="like"
                className="pull-right"
                role="presentation"
                onClick={this.handleFavorite}
                id={campaign.id}
                onKeyDown={this.handleOnKeyDown}
              />
            ) : (
              <img
                src={images.feed_like}
                alt="like"
                className="pull-right"
                role="presentation"
                onClick={this.handleFavorite}
                id={campaign.id}
                onKeyDown={this.handleOnKeyDown}
              />
            )}
          </div>
          <div className="show_more_options">
            <div>• • •</div>
          </div>
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleModalInfoShow: PropTypes.func,
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

export default Feed;
