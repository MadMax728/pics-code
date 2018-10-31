import React, { Component } from "react";
import propTypes from "prop-types";

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
    const { name, min, max, pattern, className, id } = this.props;
    const { value } = this.state;
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
        value={value}
      />
    );
  }
}

NumberInput.propTypes = {
  name: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
  id: propTypes.string,
  min: propTypes.any,
  max: propTypes.any,
  pattern: propTypes.any
};

export default NumberInput;
