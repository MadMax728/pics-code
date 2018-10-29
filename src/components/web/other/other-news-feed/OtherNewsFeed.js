import React from "react";
import { NewsFeed } from "../../user";
import PropTypes from "prop-types";

const OtherNewsFeed = handleModalShow => {
  return <NewsFeed handleModalShow={handleModalShow} />;
};

OtherNewsFeed.propTypes = {
  handleModalShow: PropTypes.func
};

export default OtherNewsFeed;
