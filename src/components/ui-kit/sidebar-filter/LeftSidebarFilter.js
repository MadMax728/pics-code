import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadioBtn, Select, Text } from "../CommonUIComponents";
import { PlaceAutoCompleteLocation } from "../place-auto-complete-location";

class LeftSidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: []
    };
  }

  handleOnChange = filter => {
    const filterData = this.state.filterData;
    const indexOf = filterData.findIndex(f => {
      return f.name === filter.values.name;
    });

    if (indexOf === -1) {
      filterData.push(filter.values);
    } else {
      filterData.splice(indexOf, 1);
      filterData.push(filter.values);
    }

    this.setState({ filterData });

    // calling function
    this.props.onChange(filterData);
  };

  handleLocation = location => {
    const filterData = this.state.filterData;
    const indexOf = filterData.findIndex(f => {
      return f.name === "location";
    });

    const location_value = {
      name: "location",
      val: location
    };
    if (indexOf === -1) {
      filterData.push(location_value);
    } else {
      filterData.splice(indexOf, 1);
      filterData.push(location_value);
    }

    this.setState({ filterData });

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
              {filter.type === "auto-complete" && (
                <PlaceAutoCompleteLocation
                  className={""}
                  handleLocation={this.handleLocation}
                />
              )}
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
      className: PropTypes.string.isRequired,
      type: PropTypes.string,
      items: PropTypes.any
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func
};

export default LeftSidebarFilter;
