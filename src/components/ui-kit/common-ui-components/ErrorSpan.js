import React from "react";
import PropTypes from "prop-types";

const ErrorSpan = (
  {
    value,
    className
  }
) => {
  return (
    <span 
      className={className || "error-msg highlight"}>
      {value}
    </span>
  );
};

ErrorSpan.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};

export default ErrorSpan;
