import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      defaultValue: this.props.defaultValue,
      value: this.props.value,
      data: {}
    };
  }

  render() {
    const { options, disabled, className } = this.props;
    const { defaultValue, value } = this.state;

    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <select
        value={value}
        className={className}
        onChange={this.handleChange}
        // onBlur={this.handleChange}
        options={options}
        disabled={disabled}
      >
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map(option => (
          <option value={option.value} key={option.name}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleChange = event => {
    this.setState({ defaultValue: event.target.value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };
}

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any
};

export default Select;
