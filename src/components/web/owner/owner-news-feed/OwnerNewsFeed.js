import React from "react";
import { NewsFeed } from "../../user";
import PropTypes from "prop-types";

const OwnerNewsFeed = handleModalShow => {
  return <NewsFeed handleModalShow={handleModalShow} />;
};

OwnerNewsFeed.propTypes = {
  handleModalShow: PropTypes.func
};

export default OwnerNewsFeed;
