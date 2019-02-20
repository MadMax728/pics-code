import React from "react";
import PropTypes from "prop-types";
import { DateFormat } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";
import { Translations } from "../../lib/translations";

const ReviewCard = ({ item }) => {
  return (
    <div className="status backoffice-status">
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.start}</div>
        <div className="subtitle">{DateFormat(item.startDate, Translations.date_format.date, true)}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.end}</div>
        <div className="subtitle">{DateFormat(item.endDate, Translations.date_format.date, true)}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.daily_budget}</div>
        <div className="subtitle">{item.budget && item.budget.dailyBudget && item.budget.dailyBudget}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.clicks}</div>
        <div className="subtitle">{item.clicks}</div>
      </div>
      <div className="status-wrapper">
        <div className="title">{Translations.report_review.status}</div>
        <div className="subtitle">{enumerations.reportStatusType[item.reportStatus]}</div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReviewCard;
