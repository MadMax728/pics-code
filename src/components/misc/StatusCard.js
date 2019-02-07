import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const StatusCard = ({ item, isFor }) => {
  let isStatus = "green-circle";
  if (item.isActive) {
    isStatus = "green-circle";
  } else {
    isStatus = "red-circle";
  }
  return (
    <div className="status backoffice-status">
      <div className="status-wrapper">
        <div className="title">Status</div>
        <div className="subtitle">
          <span className={isStatus} />
        </div>
      </div>
      <div className="status-wrapper">
        <div className="title">Views</div>
        <div className="subtitle">{item.views}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Clicks</div>
        <div className="subtitle">{item.clicks}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Applications</div>
        <div className="subtitle">{item.applicationCount}</div>
      </div>
      {/* <div className="status-wrapper">
        <Link to={`${route}${item.id}`}>
          <button className="blue_button">Statistics</button>
        </Link>
      </div> */}
    </div>
  );
};

StatusCard.propTypes = {
  item: PropTypes.object.isRequired,
  // route: PropTypes.string.isRequired,
  isFor: PropTypes.any
};

export default StatusCard;
