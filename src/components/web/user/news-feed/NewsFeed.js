import React from "react";
import { NewsFeeds } from "../../feeds";
import { news_feed_campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

const NewsFeed = handleModalShow => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={news_feed_campaigns_list}
        handleModalShow={handleModalShow}
      />
    </div>
  );
};

NewsFeed.propTypes = {
  handleModalShow: PropTypes.func
};

export default NewsFeed;
