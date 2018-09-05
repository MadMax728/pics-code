import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadioBtn } from "./radioBtn";
import { Select } from "./select";
import { Text } from "./text";

class LeftSidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: []
    };
  }

  handleOnChange = filter => {
    let filterData = this.state.filterData;
    let indexOf = filterData.findIndex(f => {
      return f.name === filter.values.name;
    });

    if (indexOf === -1) {
      filterData.push(filter.values);
    } else {
      filterData.splice(indexOf, 1);
      filterData.push(filter.values);
    }

    this.setState({
      filterData: filterData
    });

    // calling function
    this.props.onChange(filterData);
  };

  render() {
    const { filters } = this.props;
    return (
      <div>
        {filters.map(filter => {
          return (
            <div className="filter-wrapper" key={filter.name}>
              <div className={filter.className}>{filter.name}</div>
              {filter.type === "radio" && (
                <RadioBtn
                  foruse={filter.name}
                  name={filter.name}
                  items={filter.items}
                  onChange={this.handleOnChange}
                />
              )}
              {filter.type === "select" && (
                <Select
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  onChange={this.handleOnChange}
                />
              )}

              {filter.type === "text" && (
                <Text
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

LeftSidebarFilter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      className: PropTypes.string.isRequired,
      type: PropTypes.string,
      items: PropTypes.any
    }).isRequired
  ).isRequired
};

export default LeftSidebarFilter;
