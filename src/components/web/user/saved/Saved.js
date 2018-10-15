import React from "react";
import { NewsFeeds } from "../../feeds";
import { saved_campaigns_list } from "../../../../mock-data";

const Saved = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={saved_campaigns_list} />
    </div>
  );
};

export default Saved;
