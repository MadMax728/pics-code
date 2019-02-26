import React, { Component } from "react";
import PropTypes from "prop-types";

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      data: {},
      value: ""
    };
  }

  render() {
    const { name, className, id, placeholder, value } = this.props;
    return (
      //eslint-disable-next-line jsx-a11y/no-onchange
      <div>
        <textarea
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          onChange={this.handleChangeField}
          defaultValue={value || ""}
        />
      </div>
    );
  }

  handleChangeField = event => {
    this.setState({ value: event.target.value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };
}

Textarea.propTypes = {
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

export default Textarea;
