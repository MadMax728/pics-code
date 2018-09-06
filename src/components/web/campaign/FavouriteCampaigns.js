import React from "react";
import * as images from "../../../lib/constants/images";
import FavouriteCampaignItem from "./FavouriteCampaignItem";

const campaigns = [
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign1}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign4}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 1
  },
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign1}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign2}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 2
  },
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign1}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign3}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 3
  }
];

const FavouriteCampaigns = () => {
  return (
    <div>
      <div className="normal_title padding-15">Favourite Campaigns</div>
      <div className="campaigns">
        {campaigns.map(campaign => {
          return (
            <FavouriteCampaignItem campaign={campaign} key={campaign.id} />
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteCampaigns;
