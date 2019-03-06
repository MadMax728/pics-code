import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlfor, classNames, value }) => {
  return (
    <label htmlFor={htmlfor} className={classNames}>
      {value}
    </label>
  );
};

Label.propTypes = {
  value: PropTypes.string,
  htmlfor: PropTypes.string,
  classNames: PropTypes.string
};

export default Label;
