import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { DateFormat } from "../../../Factory";
import { Translations } from "../../../../lib/translations";

const FavouriteCampaignItem = ({ campaign }) => {
  // const profile_route = campaign.isOwner
  //   ? routes.NEWS_FEED_ROUTE
  //   : `${routes.NEWS_FEED_ROUTE}/${campaign.userName}`;
  const profile_image = campaign.profileImage? campaign.profileImage : images.image;
  return (
    <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.id}`}>
      <div className="campaign_wrapper">
        <div className="col-xs-3 col-md-2">
          <img
            src={profile_image}
            alt="campaign"
            className="img-circle img-responsive"
          />
        </div>
        <div className="col-xs-9 col-md-10">
          <div className="normal_title">{campaign.title}</div>
          <div className="secondary_title">{campaign.userName}</div>
          <div className="grey_title">
            {campaign.startDate && DateFormat(campaign.startDate, Translations.date_format.time, true)}
          </div>
        </div>
      </div>
    </Link>
  );
};

FavouriteCampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default FavouriteCampaignItem;
