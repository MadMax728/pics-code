import React from "react";
import PropTypes from "prop-types";
import * as images from "/../../lib/constants/images";

const CampaignDetailsCard = ({ 
    campaignDetails,
    isComments, 
}) => {
const favorite_icon = campaignDetails.isSelfLike
    ? images.blue_heart
    : images.feed_like;
  return (
    <div>
    </div>
  );
};

CampaignDetailsCard.propTypes = {
    campaignDetails: PropTypes.any,
    isComments: PropTypes.bool
};

export default CampaignDetailsCard;
