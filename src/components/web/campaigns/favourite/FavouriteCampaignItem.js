import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { DateFormat } from "../../../Factory";
import { Translations } from "../../../../lib/translations";
import { UserImageItem, UserTitleItem } from "../../../ui-kit";

const FavouriteCampaignItem = ({ campaign }) => {
  const profile_image = campaign.profileImage
    ? campaign.profileImage
    : images.image;
  return (
    <Link
      to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${campaign.userType}${"/"}${
        campaign.id
      }`}
    >
      <div className="campaign_wrapper">
        <div className="col-xs-3 col-md-2">
          <UserImageItem 
            customClass={'img-circle img-responsive'} 
            item={profile_image}>
          </UserImageItem>
        </div>
        <div className="col-xs-9 col-md-10">
          <UserTitleItem 
              title={campaign.title} 
              username={campaign.userName} 
              date={ DateFormat( campaign.startDate, Translations.date_format.date,true) }>
          </UserTitleItem>
        </div>
      </div>
    </Link>
  );
};

FavouriteCampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default FavouriteCampaignItem;
