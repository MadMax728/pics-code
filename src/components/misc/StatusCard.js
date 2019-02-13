import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../lib/translations";
import { Button } from "../ui-kit";

const StatusCard = ({ item, route, isFor }) => {
  let isStatus = "green-circle";
  if (item.isActive) {
    isStatus = "green-circle";
  } else {
    isStatus = "red-circle";
  }
  return (
    <div className="">
      {/* <div className="status-wrapper">
        <div className="title">Status</div>
        <div className="subtitle">
          <span className={isStatus} />
        </div>
      </div> */}
      {/* <div className="status-wrapper">
        <div className="title">Views</div>
        <div className="subtitle">{item.views}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.clicks}</div>
        <div className="subtitle">{item.clicks}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.applications}</div>
        <div className="subtitle">{item.applicationCount}</div>
      </div> */}
      <div className="camp-statices-btn">
        <Link to={`${route}${item.id}`}>
          <Button 
            className="blue_button"
            text={Translations.create_ads.statistics}
          />
        </Link>
      </div>
    </div>
  );
};

StatusCard.propTypes = {
  item: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  isFor: PropTypes.any
};

export default StatusCard;
