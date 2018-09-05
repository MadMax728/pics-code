import React from "react";
import propTypes from "prop-types";

const Select = ({
  options,
  onChange,
  defaultValue,
  value,
  disabled,
  customSelect
}) => {
  const populateSelect = customSelect => {
    if (customSelect && options) {
      return customSelect(options);
    }

    return options.map(option => (
      <option value={option.value} key={option.name}>
        {option.value}
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
      {populateSelect(customSelect)}
    </select>
  );
};

Select.propTypes = {
  value: propTypes.string,
  options: propTypes.array.isRequired,
  onChange: propTypes.func,
  defaultValue: propTypes.string,
  disabled: propTypes.bool,
  customSelect: propTypes.func
};

export default Select;
