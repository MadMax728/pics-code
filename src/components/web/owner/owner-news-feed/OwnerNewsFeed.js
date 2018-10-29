import React from "react";
import { NewsFeed } from "../../user";
import PropTypes from "prop-types";

const OwnerNewsFeed = (handleModalShow, handleModalInfoShow) => {
  return (
    <NewsFeed
      handleModalShow={handleModalShow}
      handleModalInfoShow={handleModalInfoShow}
    />
  );
};

OwnerNewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default OwnerNewsFeed;
