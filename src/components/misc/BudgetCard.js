import React from "react";
import PropTypes from "prop-types";
import * as enumerations from "../../lib/constants/enumerations";
import { Translations } from "../../lib/translations";

const BudgetCard = ({ item }) => {
  return (
    <div className="status">
      <div className="status-wrapper">
        <div className="title">{Translations.create_campaigns.total_budget}</div>
        <div className="subtitle">{item.maximumExpenses}</div>
      </div>
      <div className="status-wrapper pull-right">
        <div className="title">{Translations.create_campaigns.status}</div>
        <div className="subtitle">{enumerations.reportStatusType[item.reportStatus]}</div>
      </div>
    </div>
  );
};

BudgetCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default BudgetCard;
