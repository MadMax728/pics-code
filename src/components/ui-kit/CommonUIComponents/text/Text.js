import React, { Component } from "react";
import PropTypes from "prop-types";

class Text extends Component {
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
    const {
      name,
      className,
      id,
      type,
      autoComplete,
      placeholder,
      value
    } = this.props;
    // const { value } = this.state;
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
        value={value || ''}
      />
    );
  }
}

Text.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default Text;
