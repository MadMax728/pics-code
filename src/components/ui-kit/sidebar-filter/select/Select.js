import React, { Component } from "react";
import propTypes from "prop-types";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      defaultValue: this.props.defaultValue,
      data: {}
    };
  }

  handleChange = event => {
    this.setState({ defaultValue: event.target.value });
    const { data } = this.state;
    data[this.state.name] = event.target.value;
    data["values"] = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };

  render() {
    const { options, disabled } = this.props;
    const { defaultValue } = this.state;

    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <select
        value={defaultValue}
        className="drop-down"
        onChange={this.handleChange}
        options={options}
        disabled={disabled}
      >
        <option value="">{defaultValue}</option>
        {options.map(option => (
          <option value={option.value} key={option.name}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  value: propTypes.string,
  options: propTypes.array.isRequired,
  onChange: propTypes.func,
  defaultValue: propTypes.string,
  disabled: propTypes.bool,
  customSelect: propTypes.func
};

export default Select;
