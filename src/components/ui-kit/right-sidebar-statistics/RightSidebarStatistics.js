import React from "react";
import PropTypes from "prop-types";

const onKeyDown = () => {};

const RightSidebarStatistics = ({ header, statistics, handleEvent }) => {
  return (
    <div className="campaigns-right">
      <div className="normal_title padding-15">{header}</div>
      <ul className="campaign-right-options">
        {statistics && statistics.map(statistic => (
          <li key={statistic.name}>
            <span id={statistic.id} onClick={handleEvent} role="button" tabIndex="0" onKeyDown={onKeyDown} >{statistic.name}</span>
            <span id={statistic.id} onClick={handleEvent} role="button" tabIndex="0" onKeyDown={onKeyDown} className="pull-right">{statistic.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RightSidebarStatistics.propTypes = {
  header: PropTypes.string,
  statistics: PropTypes.any.isRequired,
  handleEvent: PropTypes.func.isRequired
};

export default RightSidebarStatistics;
