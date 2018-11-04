import React from "react";
import PropTypes from "prop-types";

const RightSidebarStatistics = ({ header, statistics }) => {
  return (
    <div className="campaigns-right">
      <div className="normal_title padding-15">{header}</div>
      <ul className="campaign-right-options">
        {statistics.map(statistic => (
          <li key={statistic.name}>
            <span>{statistic.name}</span>
            <span className="pull-right">{statistic.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RightSidebarStatistics.propTypes = {
  header: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default RightSidebarStatistics;
