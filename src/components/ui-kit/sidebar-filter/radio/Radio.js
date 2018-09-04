import React from "react";
import propTypes from "prop-types";

const Radio = ({
  name,
  foruse,
  value,
  checked,
  className
  // onChange
}) => {
  return (
    //eslint-disable-next-line jsx-a11y/no-onchange
    <label className={className}>
      <span>{name}</span>
      <input
        type="radio"
        name={foruse}
        value={value}
        // checked={checked}
        // onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
};

Radio.propTypes = {
  value: propTypes.string,
  name: propTypes.string,
  foruse: propTypes.string,
  // onChange: propTypes.func,
  className: propTypes.string,
  checked: propTypes.bool
};

export default Radio;
