import React from "react";
import { NewsFeeds } from "../../feeds";
import { news_feed_campaigns_list } from "../../../../mock-data";

const NewsFeed = () => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds campaigns={news_feed_campaigns_list} />
    </div>
  );
};

export default NewsFeed;
