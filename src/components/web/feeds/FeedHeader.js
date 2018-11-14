import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";

class FeedHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleKeyDown = () => {};

  handleFavorite = e => {
    this.props.handleFavorite(e);
  };

  render() {
    const { campaign, isDescription, isInformation } = this.props;
    const profile_route = campaign.user.isOwner
      ? `/news-feed`
      : `/news-feed/${campaign.id}`;

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
          <Link
            to={{
              pathname: `/campaign/${campaign.id}/information`,
              state: { _id: campaign.id }
            }}
          >
            <div className="normal_title">{campaign.title}</div>
          </Link>
          <div className="secondary_title">{campaign.user.name}</div>
          <div className="grey_title">{campaign.category}</div>
        </div>

        <div
          className={
            !isDescription && isInformation
              ? "col-sm-2 col-xs-2 like_wrapper"
              : "like_wrapper"
          }
          role="article"
        >
          {campaign.isFavorite ? (
            <img
              src={images.blue_heart}
              alt="like"
              className="pull-right"
              role="presentation"
              onClick={this.handleFavorite}
              id={campaign.id}
              onKeyDown={this.handleKeyDown}
            />
          ) : (
            <img
              src={images.feed_like}
              alt="like"
              className="pull-right"
              role="presentation"
              onClick={this.handleFavorite}
              id={campaign.id}
              onKeyDown={this.handleKeyDown}
            />
          )}
        </div>
      </div>
    );
  }
}

FeedHeader.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
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
