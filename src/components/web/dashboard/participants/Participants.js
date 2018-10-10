import React from "react";
import { NewsFeeds } from "../../feeds";
import { timeLine } from "../../../../mockdata";

const Participants = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={timeLine} />
    </div>
  );
};

export default Participants;
