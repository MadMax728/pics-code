import React from "react";
import { NewsFeeds } from "../../feeds";
import { participants_campaigns_list } from "../../../../mock-data";

const Participant = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={participants_campaigns_list} />
    </div>
  );
};

export default Participant;
