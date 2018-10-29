import React from "react";
import { NewsFeeds } from "../../feeds";
import { explore_campaigns_list } from "../../../../mock-data";

import PropTypes from "prop-types";

const Explore = handleModalShow => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={explore_campaigns_list}
        handleModalShow={handleModalShow}
      />
    </div>
  );
};

Explore.propTypes = {
  handleModalShow: PropTypes.func
};

export default Explore;
