import React from "react";
import PropTypes from "prop-types";
import * as enumerations from "../../lib/constants/enumerations";

const BudgetCard = ({ item }) => {
  return (
    <div className="status">
      <div className="status-wrapper">
        <div className="title">Total budget</div>
        <div className="subtitle">{item.maximumExpenses}</div>
      </div>
      <div className="status-wrapper pull-right">
        <div className="title">Status</div>
        <div className="subtitle">{enumerations.reportStatusType[item.reportStatus]}</div>
      </div>
    </div>
  );
};

BudgetCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default BudgetCard;
