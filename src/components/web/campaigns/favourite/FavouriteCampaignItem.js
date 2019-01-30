import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

const FavouriteCampaignItem = ({ campaign }) => {
  const profile_route = campaign.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${campaign.userName}`;
  console.log(campaign);

  return (
    <div className="campaign_wrapper">
      <div className="col-xs-3 col-md-2">
        <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`}>
          <img
            src={campaign.profileImage}
            alt="campaign"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-xs-9 col-md-10">
        <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`}>
          <div className="normal_title">{campaign.title}</div>
        </Link>
        <Link to={profile_route}>
          <div className="secondary_title">{campaign.userName}</div>
        </Link>
        <div className="grey_title">
          {campaign.category && campaign.category[0].categoryName}
        </div>
      </div>
    </div>
  );
};

FavouriteCampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default FavouriteCampaignItem;
