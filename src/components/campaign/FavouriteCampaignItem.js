import React from "react";
import PropTypes from "prop-types";

const FavouriteCampaignItem = ({ campaign }) => {
  return (
    <div className="campaign_wrapper">
      <div className="col-sm-4 col-xs-2">
        <img
          src={campaign.user.image}
          alt="campaign"
          className="img-circle img-responsive"
        />
      </div>
      <div className="col-sm-8 col-xs-10 no-padding">
        <div className="normal_title">{campaign.title}</div>
        <div className="secondary_title">{campaign.user.name}</div>
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