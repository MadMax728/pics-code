import React from "react";
import { NewsFeeds } from "../../feeds";
import { saved_campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

const Saved = handleModalShow => {
  return (
    <div className={"middle-section padding-rl-10"}>
      <NewsFeeds
        campaigns={saved_campaigns_list}
        handleModalShow={handleModalShow}
      />
    </div>
  );
};

Saved.propTypes = {
  handleModalShow: PropTypes.func
};

export default Saved;
