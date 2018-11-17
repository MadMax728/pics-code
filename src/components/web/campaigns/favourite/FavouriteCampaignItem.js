import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

const FavouriteCampaignItem = ({ campaign }) => {
  const profile_route = campaign.user.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}${campaign.id}`;
  return (
    <div className="campaign_wrapper">
      <div className="col-sm-4 col-xs-2">
        <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`}>
          <img
            src={campaign.image}
            alt="campaign"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-sm-8 col-xs-10 no-padding">
        <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`}>
          <div className="normal_title">{campaign.title}</div>
        </Link>
        <Link to={profile_route}>
          <div className="secondary_title">{campaign.user.name}</div>
        </Link>
        <div className="grey_title">{campaign.category}</div>
      </div>
    </div>
  );
};

FavouriteCampaignItem.propTypes = {
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

export default FavouriteCampaignItem;
