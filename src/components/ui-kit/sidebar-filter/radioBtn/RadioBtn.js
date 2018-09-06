import React, { Component } from "react";
import propTypes from "prop-types";
import { RadioGroup, Radio } from "react-radio-group";

class RadioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      name: "",
      data: {}
    };
  }

  componentDidMount() {
    this.setState({
      selectedValue: this.props.items[0].name,
      name: this.props.name
    });
  }

  handleChange = value => {
    this.setState({ selectedValue: value });
    const { data } = this.state;
    data.values = { name: this.state.name, val: value };
    this.props.onChange(data);
  };

  render() {
    const { items, name } = this.props;

    return (
      //eslint-disable-next-line jsx-a11y/no-onchange

      <RadioGroup
        name={name}
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}
      >
        {items.map(item => {
          return (
            <label className={item.className} key={item.name} htmlFor={"name"}>
              <span>{item.name}</span>
              <Radio value={item.name} />
              <span className="checkmark" />
            </label>
          );
        })}
      </RadioGroup>
    );
  }
}

RadioBtn.propTypes = {
  onChange: propTypes.func,
  className: propTypes.string,
  name: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      checked: propTypes.bool,
      className: propTypes.string
    }).isRequired
  ).isRequired
};

export default RadioBtn;
