import React from "react";
import PropTypes from "prop-types";
import { DateFormat } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";
import { Translations } from "../../lib/translations";
import { ThreeDots } from "../ui-kit";

const ReportCard = ({ item, renderReportTips }) => {
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
      <div className="show_more_options">
        <ThreeDots
          id={`report-${item.id}`}
          role="button"
          dataTip="tooltip"
          dataClass="tooltip-wrapr"
          getContent={renderReportTips}
          effect="solid"
          delayHide={500}
          delayShow={500}
          delayUpdate={500}
          place={"left"}
          border
          type={"light"}
        />
      </div>
    </div>
  );
};

ReportCard.propTypes = {
  item: PropTypes.object.isRequired,
  renderReportTips: PropTypes.any.isRequired
};

export default ReportCard;
