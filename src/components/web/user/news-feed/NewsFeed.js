import React from "react";
import { NewsFeeds } from "../../feeds";
import { news_feed_campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

const NewsFeed = (handleModalShow, handleModalInfoShow) => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={news_feed_campaigns_list}
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
      />
    </div>
  );
};

NewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default NewsFeed;
