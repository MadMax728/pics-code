import React from "react";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";

import PropTypes from "prop-types";

const Campaign = (handleModalShow, handleModalInfoShow) => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={campaigns_list}
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
      />
    </div>
  );
};

Campaign.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Campaign;
