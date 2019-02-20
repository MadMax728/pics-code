import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { categoryList } from "../../../lib/constants/select";

class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList
    };
  }

  render() {
    const { categoryList } = this.state;
    const { value, className } = this.props;

    return (
      <select
        value={value}
        className={className}
        onChange={this.handleCategory}
        onBlur={this.handleCategory}
        options={categoryList}
      >
        <option value="">{Translations.select_category}</option>
        {categoryList.map(option => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }

  handleCategory = event => {
    const { categoryList } = this.state;
    const name = categoryList.filter(c => c.id === event.target.value);
    const data = {
      id: event.target.value,
      name: (name.length !== 0) ?  name[0].value : ""
    }
    this.props.handleSelect("category", data);
  };
}

const propTypes = {
  value: PropTypes.any,
  className: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

SelectCategory.propTypes = propTypes;

export default SelectCategory;
