import React from "react";
import PropTypes from "prop-types";

const ErrorSpan = (
  {
    value
  }
) => {
  return (
    <span 
      className="error-msg highlight">
      {value}
    </span>
  );
};

ErrorSpan.propTypes = {
  value: PropTypes.string,
};

export default ErrorSpan;
