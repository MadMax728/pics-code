import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import { Link } from "react-router-dom";

const StatusCard = ({ item, route }) => {
  return (
    <div className="status">
      <div className="status-wrapper">
        <div className="title">Status</div>
        <div className="subtitle">
          <span className="green-circle" />
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
        <div className="subtitle">{item.applications}</div>
      </div>
      <div className="status-wrapper">
        <Link to={`${route}${item.id}`}>
          <button className="blue_button">statistics</button>
        </Link>
      </div>
    </div>
  );
};

StatusCard.propTypes = {
  item: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired
};

export default StatusCard;
