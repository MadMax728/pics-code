import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { radiusList } from "../../../lib/constants";

class SelectRadius extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiusList
    };
  }

  render() {
    const { radiusList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleRadius}
        onBlur={this.handleRadius}
        options={radiusList}
      >
        <option value="">{Translations.select_radius}</option>
        {radiusList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleRadius = event => {
    const { radiusList } = this.state;
    const name = radiusList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: name.length !== 0 ? name[0].value : ""
    };
    this.props.handleSelect("radius", data);
  };
}

const propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

SelectRadius.propTypes = propTypes;

export default SelectRadius;
