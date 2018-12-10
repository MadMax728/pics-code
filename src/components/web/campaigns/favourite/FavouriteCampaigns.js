import React from "react";
import FavouriteCampaignItem from "./FavouriteCampaignItem";
import { campaigns_list } from "../../../../mock-data";
import { Translations } from "../../../../lib/translations";
import * as enumerations from "../../../../lib/constants/enumerations";

const FavouriteCampaigns = () => {
  return (
    <div>
      <div className="normal_title padding-15">
        {Translations.favourite_campaigns}
      </div>
      <div className="campaigns">
        {campaigns_list.map(campaign => {
          return (
            (campaign.postType && campaign.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
              campaign.postType.toLowerCase() ===
                enumerations.contentTypes.creatorCampaign) && (
              <FavouriteCampaignItem campaign={campaign} key={campaign.id} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteCampaigns;
