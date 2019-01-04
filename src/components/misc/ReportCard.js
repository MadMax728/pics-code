import React from "react";
import PropTypes from "prop-types";
import { DateFormat } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";
import { Translations } from "../../lib/translations";

const ReportCard = ({ item }) => {
  return (
    <div className="status backoffice-status">
      <div className="status-wrapper">
        <div className="title">Date</div>
        <div className="subtitle">{DateFormat(item.firstReportedDate, Translations.date_format.time, true)}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Reports</div>
        <div className="subtitle">{item.reportCount}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">Status</div>
        <div className="subtitle">{enumerations.reportStatusType[item.reportStatus]}</div>
      </div>
    </div>
  );
};

ReportCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ReportCard;
