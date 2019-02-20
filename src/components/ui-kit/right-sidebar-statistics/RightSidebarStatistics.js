import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const onKeyDown = () => { };

const RightSidebarStatistics = ({ header, handleEvent, all, outstanding, processed, notProcessed }) => {
  const statistics = [
    {
      name: Translations.right_side_bar_statistics.all,
      id: "All",
      value: all
    },
    {
      name: Translations.right_side_bar_statistics.outstanding,
      id: "Outstanding",
      value: outstanding
    },
    {
      name: Translations.right_side_bar_statistics.processed,
      id: "Processed",
      value: processed
    },
    {
      name: Translations.right_side_bar_statistics.not_processed,
      id: "NotProcessed",
      value: notProcessed
    }
  ]

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
  handleEvent: PropTypes.func.isRequired,
  all: PropTypes.any.isRequired,
  outstanding: PropTypes.any.isRequired,
  processed: PropTypes.any.isRequired,
  notProcessed: PropTypes.any.isRequired
};

export default RightSidebarStatistics;
