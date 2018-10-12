import React from "react";
import * as images from "../../../../lib/constants/images";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";

const Campaign = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={campaigns_list} />
    </div>
  );
};

export default Campaign;
