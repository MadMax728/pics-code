import React from "react";
import { NewsFeeds } from "../../feeds";
import { participants_campaigns_list } from "../../../../mock-data";

import PropTypes from "prop-types";

const Participant = (handleModalShow, handleModalInfoShow) => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={participants_campaigns_list}
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
      />
    </div>
  );
};

Participant.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Participant;
