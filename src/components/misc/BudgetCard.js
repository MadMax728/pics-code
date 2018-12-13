import React from "react";
import PropTypes from "prop-types";

const BudgetCard = ({ item }) => {
  return (
    <div className="status">
      <div className="status-wrapper">
        <div className="title">Total budget</div>
        <div className="subtitle">{item.total_budget}</div>
      </div>
      <div className="status-wrapper pull-right">
        <div className="title">Status</div>
        <div className="subtitle">{item.status}</div>
      </div>
    </div>
  );
};

BudgetCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default BudgetCard;
