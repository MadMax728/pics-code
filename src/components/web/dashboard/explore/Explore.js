import React from "react";
import { NewsFeeds } from "../../feeds";
import { explore_campaigns_list } from "../../../../mock-data";

import PropTypes from "prop-types";

const Explore = (handleModalShow, handleModalInfoShow) => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={explore_campaigns_list}
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
        isDescription
        isInformation={false}
      />
    </div>
  );
};

Explore.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Explore;
