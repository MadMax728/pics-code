import React from "react";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
import { favourite_campaigns_list } from "../../../../mock-data";

const FavouriteCampaigns = () => {
  return (
    <div>
      <div className="normal_title padding-15">Favourite Campaigns</div>
      <div className="campaigns">
        {favourite_campaigns_list.map(campaign => {
          return (
            <FavouriteCampaignItem campaign={campaign} key={campaign.id} />
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteCampaigns;
