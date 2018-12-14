import React from "react";
import PropTypes from "prop-types";
import { DateFormat } from "../Factory";

const ReportCard = ({ item }) => {
  return (
    <div className="status backoffice-status">
      <div className="status-wrapper">
        <div className="title">Date</div>
        <div className="subtitle">{DateFormat(item.date)}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Reports</div>
        <div className="subtitle">{item.reports}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Status</div>
        <div className="subtitle">{item.status}</div>
      </div>
    </div>
  );
};

ReportCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ReportCard;
