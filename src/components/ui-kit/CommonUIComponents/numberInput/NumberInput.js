import React, { Component } from "react";
import PropTypes from "prop-types";

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: {},
      value: ""
    };
  }

  handleChangeField = event => {
    this.setState({ value: event.target.value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };

  render() {
    const { name, min, max, pattern, className, id, value } = this.props;
    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <input
        type="number"
        name={name}
        id={id}
        min={min}
        max={max}
        pattern={pattern}
        className={className}
        onChange={this.handleChangeField}
        defaultValue={value}
      />
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.any,
  max: PropTypes.any,
  pattern: PropTypes.any
};

export default NumberInput;
