import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

const propTypes = {
  id: PropTypes.string.isRequired,
  getContent: PropTypes.any.isRequired,
  effect: PropTypes.string.isRequired,
  delayHide: PropTypes.number.isRequired,
  delayShow: PropTypes.number.isRequired,
  delayUpdate: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
  border: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

const ToolTip = ({
  id,
  getContent,
  effect,
  delayHide,
  delayShow,
  delayUpdate,
  place,
  border,
  type
}) => {
  return (
    <ReactTooltip
      id={id}
      getContent={getContent}
      effect={effect}
      delayHide={delayHide}
      delayShow={delayShow}
      delayUpdate={delayUpdate}
      place={place}
      border={border}
      type={type}
    />
  );
};

ToolTip.propTypes = propTypes;

export default ToolTip;
