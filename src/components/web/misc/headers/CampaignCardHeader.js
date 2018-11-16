import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";

const CampaignCardHeader = ({
  campaign,
  isDescription,
  isInformation,
  handleFavorite
}) => {
  const like_wrapper = classnames("like_wrapper", {
    "col-sm-2 col-xs-2 like_wrapper": isDescription && isInformation
  });
  const profile_route = campaign.user.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}${campaign.id}`;
  const favorite_icon = campaign.isFavorite
    ? images.blue_heart
    : images.feed_like;
  return (
    <div className="feed_header">
      <div className="no-padding profile_image">
        <Link to={profile_route}>
          <img
            src={campaign.user.image}
            alt="feed"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="no-padding titles_wrapper">
        <Link
          to={{
            pathname: `${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`,
            state: { _id: campaign.id }
          }}
        >
          <div className="normal_title">{campaign.title}</div>
        </Link>
        <Link to={profile_route}>
          <div className="secondary_title">{campaign.user.name}</div>
        </Link>
        {campaign.category && (
          <div className="grey_title">{campaign.category}</div>
        )}
      </div>
      <div className={like_wrapper} role="article">
        <img
          src={favorite_icon}
          alt="like"
          className="pull-right"
          role="presentation"
          onClick={handleFavorite}
          id={campaign.id}
          onKeyDown={handleFavorite}
        />
      </div>
    </div>
  );
};

CampaignCardHeader.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  campaign: propTypes.object.isRequired,
  isDescription: propTypes.bool.isRequired,
  isInformation: propTypes.bool.isRequired
};

export default CampaignCardHeader;
