import React from "react";
import { NewsFeeds } from "../../feeds";
import { explore_campaigns_list } from "../../../../mock-data";

const Explore = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={explore_campaigns_list} />
    </div>
  );
};

export default Explore;
