import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: {},
      value: ""
    };
  }

  render() {
    const {
      name,
      className,
      id,
      type,
      autoComplete,
      placeholder,
      value,
      readOnly
    } = this.props;
    // const { value } = this.state;
    let isReadonly = "";
    if (readOnly) {
      isReadonly = readOnly;
    }

    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={this.handleChangeField}
        defaultValue={value || ""}
        readOnly={isReadonly}
      />
    );
  }

  handleChangeField = event => {
    this.setState({ value: event.target.value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };
}

Input.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.any
};

export default Input;
