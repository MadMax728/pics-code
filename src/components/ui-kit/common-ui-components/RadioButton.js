import React, { Component } from "react";
import PropTypes from "prop-types";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      name: this.props.name,
      data: {}
    };
  }

  render() {
    const { className, value, name, id, defaultChecked } = this.props;
    return (
      <input
        type="radio"
        name={name}
        id={id}
        className={className}
        onChange={this.handleChangeField}
        value={value}
        checked={defaultChecked}
      />
    );
  }

  // componentDidMount() {
  //   this.setState({
  //     selectedValue: this.props.items[0].name,
  //     name: this.props.name
  //   });
  // }

  handleChangeField = event => {
    this.setState({ value: event.target.value });
    const { data } = this.state;
    data.values = { name: event.target.name, val: event.target.value };
    this.props.onChange(data);
  };

}

RadioButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.any
};

export default RadioButton;
