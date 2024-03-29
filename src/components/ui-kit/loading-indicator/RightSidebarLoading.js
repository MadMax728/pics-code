import React from "react";
import PropTypes from "prop-types";

const RightSidebarLoading = ({ count }) => {
  return Array(count)
    .fill()
    .map((item, index) => {
      return (
        <div key={index} className="feed_wrapper">
          <div className="campaigns">
            <div className="campaign_wrapper">
              <div className="col-xs-3 col-md-2">
                <span className="gray_box pro-image" />
              </div>
              <div className="col-xs-9 col-md-10">
                <div className="normal_title gray_box gray_box_big desc2" />
                <div className="secondary_title gray_box desc1sm" />
                <div className="secondary_title gray_box desc1sm" />
              </div>
            </div>
          </div>
        </div>
      );
    });
};

RightSidebarLoading.defaultProps = {
  count: 5
};

RightSidebarLoading.propTypes = {
  count: PropTypes.number
};

export default RightSidebarLoading;
