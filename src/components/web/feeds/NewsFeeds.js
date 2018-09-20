import React from "react";
import PropTypes from "prop-types";
import Feed from "./Feed";

const propTypes = {
  campaigns: PropTypes.array.isRequired
};

const NewsFeeds = ({ campaigns }) => {
  return campaigns.map(campaign => {
    return (
      <div key={campaign.id}>
        <Feed campaign={campaign} />
      </div>
    );
  });
};

NewsFeeds.propTypes = propTypes;

export default NewsFeeds;
