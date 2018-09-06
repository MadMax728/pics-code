import React, { Component } from "react";
import propTypes from "prop-types";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: {},
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };

  render() {
    const { name, className } = this.props;
    const { value } = this.state;
    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <input
        type="text"
        name={name}
        className={className}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

Text.propTypes = {
  name: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string
};

export default Text;
