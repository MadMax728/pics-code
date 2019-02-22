import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

const NoDataFoundRightSidebar = ({ image }) => {
  return (
    <div className="feed_wrapper">
      <div className="datanotfound-wrapper">
        <img src={image} alt="no_data_image" className="img-responsive" />
      </div>
    </div>
  );
};

NoDataFoundRightSidebar.propTypes = {
  image: PropTypes.string
};

/**
 * images.no_community_pic
 * images.no_campaign_pic
 * images.no_record_found
 */
NoDataFoundRightSidebar.defaultProps = {
  image: `${images.no_record_found}`
};

export default NoDataFoundRightSidebar;
