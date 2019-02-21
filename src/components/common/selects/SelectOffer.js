import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { offerList } from "../../../lib/constants";


class SelectOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerList
    };
  }

  render() {
    const { value, className } = this.props;
    const { offerList } = this.state;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleOffer}
        onBlur={this.handleOffer}
        options={offerList}
      >
        <option value="">{Translations.select_offer}</option>
        {offerList && offerList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleOffer = (event) => {
    const { offerList } = this.state;
    const name = offerList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ? name[0].value : ""
    }
    this.props.handleSelect("offers", data);
  };
}

const propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

SelectOffer.propTypes = propTypes;


export default SelectOffer;