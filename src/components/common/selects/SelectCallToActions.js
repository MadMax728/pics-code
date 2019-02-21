import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { callToActionList } from "../../../lib/constants";

class SelectCallToActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callToActionList
    }
  }

  render() {
    const { callToActionList } = this.state;
    const { value, className } = this.props;
    return (
      <select
        value={value}
        className={className}
        onChange={this.handleCallToActions}
        onBlur={this.handleCallToActions}
        options={callToActionList}
      >
        <option value="">{Translations.call_to_action}</option>
        {callToActionList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleCallToActions = (event) => {
    const { callToActionList } = this.state;
    const name = callToActionList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ?  name[0].value : ""
    }
    this.props.handleSelect("callToAction", data);
  };
}

const propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

SelectCallToActions.propTypes = propTypes;


export default SelectCallToActions;
