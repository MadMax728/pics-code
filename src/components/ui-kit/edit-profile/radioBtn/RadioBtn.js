import React, { Component } from "react";
import propTypes from "prop-types";
import { RadioGroup, Radio } from "react-radio-group";

class RadioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      name: this.props.name,
      data: {}
    };
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
    data.values = { name: this.state.name, val: event.target.value };
    this.props.onChange(data);
  };

  render() {
    const { className, value, name, id } = this.props;
    return (
      <input
        type="radio"
        name={name}
        id={id}
        className={className}
        onChange={this.handleChangeField}
        value={value}
      />
    );
  }
}

RadioBtn.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
  value: propTypes.string,
  id: propTypes.string,
  onChange: propTypes.func
};

export default RadioBtn;
