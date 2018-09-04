import React from "react";
import propTypes from "prop-types";

const Radio = ({
  name,
  foruse,
  className
  // onChange
}) => {
  return (
    //eslint-disable-next-line jsx-a11y/no-onchange
    <input type="text" name={name} className={className} />
  );
};

Radio.propTypes = {
  name: propTypes.string,
  foruse: propTypes.string,
  // onChange: propTypes.func,
  className: propTypes.string
};

export default Radio;
