import React from "react";
import { NewsFeeds } from "../../feeds";
import { participants_campaigns_list } from "../../../../mock-data";

import propTypes from "prop-types";

const Participants = handleModalShow => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={participants_campaigns_list}
        handleModalShow={handleModalShow}
      />
    </div>
  );
};

Participants.propTypes = {
  handleModalShow: propTypes.func
};

export default Participants;
