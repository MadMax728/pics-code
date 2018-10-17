import React from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
// used for custome formatter

const propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  defaultSorted: PropTypes.array,
  pagination: PropTypes.object,
  noDataIndication: PropTypes.string,
  wrapperClasses: PropTypes.string
};

const CustomBootstrapTable = ({
  id,
  columns,
  data,
  striped,
  hover,
  condensed,
  bordered,
  defaultSorted,
  noDataIndication,
  wrapperClasses,
  pagination
}) => {
  return (
    <div>
      <BootstrapTable
        keyField={id}
        wrapperClasses={wrapperClasses}
        data={data}
        columns={columns}
        striped={striped}
        hover={hover}
        bordered={bordered}
        condensed={condensed}
        defaultSorted={defaultSorted}
        noDataIndication={noDataIndication}
        pagination={paginationFactory(pagination)}
      />
    </div>
  );
};

CustomBootstrapTable.propTypes = propTypes;

export default CustomBootstrapTable;
