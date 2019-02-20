import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { inquiryList } from "../../../lib/constants";

class SelectInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiryList
    }
  }
  render() {
    const { inquiryList } = this.state;
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleInquiry}
        onBlur={this.handleInquiry}
        options={inquiryList}
      >
        <option value="">{Translations.select_inquiry}</option>
        {inquiryList && inquiryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleInquiry = (event) => {
    const { inquiryList } = this.state;
    const name = inquiryList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ? name[0].value : ""
    }
    this.props.handleSelect("inquiry", data);
  };
}

const propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

SelectInquiry.propTypes = propTypes;

export default SelectInquiry;
