import React from "react";
import propTypes from "prop-types";

const Radio = ({
  name,
  forUse,
  value,
  checked,
  key,
  className
  // onChange
}) => {
  return (
    //eslint-disable-next-line jsx-a11y/no-onchange
    <label className={className} id={key}>
      <span>{name}</span>
      <input
        type="radio"
        name={forUse}
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
  forUse: propTypes.string,
  // onChange: propTypes.func,
  className: propTypes.string,
  checked: propTypes.bool,
  key: propTypes.any
};

export default Radio;
