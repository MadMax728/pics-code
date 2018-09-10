import React from "react";
import propTypes from "prop-types";

const DropDown = ({
  options,
  onChange,
  defaultValue,
  value,
  disabled,
  customDropDown
}) => {
  const populateDropDown = customDropDown => {
    if (customDropDown && options) {
      return customDropDown(options);
    }

    return options.map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
  };

  return (
    //eslint-disable-next-line jsx-a11y/no-onchange
    <select
      value={value}
      className="drop-down"
      onChange={onChange}
      options={options}
      disabled={disabled}
    >
      <option value="">{defaultValue}</option>
      {populateDropDown(customDropDown)}
    </select>
  );
};

DropDown.propTypes = {
  value: propTypes.string,
  options: propTypes.array.isRequired,
  onChange: propTypes.func,
  defaultValue: propTypes.string,
  disabled: propTypes.bool,
  customDropDown: propTypes.func
};

export default DropDown;
