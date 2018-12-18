import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadioBtn, Select, Text } from "../CommonUIComponents";
import { PlaceAutoCompleteLocation } from "../place-auto-complete-location";
import {
  SelectCategory,
  SelectOffer,
  SelectInquiry,
  OfferTags,
  InquiryTags
} from "../../common";

class LeftSidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: []
    };
  }

  handleOnChange = filter => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
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

  handleSelectList = (isFor, selected) => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const indexOf = filterData.findIndex(f => {
      return f.name === isFor;
    });
    if (indexOf === -1) {
      filterData.push({ name: isFor, val: selected });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: isFor, val: selected });
    }
    this.setState({ filterData });
    this.props.onChange(filterData);
  };

  handleOfferTagChange = (id, tag) => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const indexOf = filterData.findIndex(f => {
      return f.name === "offerTagName";
    });
    if (indexOf === -1) {
      filterData.push({ name: "offerTagName", val: id });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: "offerTagName", val: id });
    }
    this.setState({ filterData });
    this.props.onChange(filterData);
  };

  handleOfferTagDelete = id => {
    console.log(id);
  };

  handleInquiryTagChange = (id, tag) => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const indexOf = filterData.findIndex(f => {
      return f.name === "inquiryTagName";
    });
    if (indexOf === -1) {
      filterData.push({ name: "inquiryTagName", val: id });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: "inquiryTagName", val: id });
    }
    this.setState({ filterData });
    this.props.onChange(filterData);
  };

  handleInquiryTagDelete = id => {
    console.log(id);
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
              {filter.type === "select-category" && (
                <SelectCategory
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  handleSelect={this.handleSelectList}
                />
              )}
              {filter.type === "select-inquiry" && (
                <SelectInquiry
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  handleSelect={this.handleSelectList}
                />
              )}
              {filter.type === "select-offer" && (
                <SelectOffer
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  handleSelect={this.handleSelectList}
                />
              )}
              {filter.type === "text" && (
                <Text
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                />
              )}
              {filter.type === "text-offer-tag" && (
                <OfferTags
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                  handleOfferTagChange={this.handleOfferTagChange}
                  handleOfferTagDelete={this.handleOfferTagDelete}
                />
              )}
              {filter.type === "text-inquiry-tag" && (
                <InquiryTags
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                  handleInquiryTagChange={this.handleInquiryTagChange}
                  handleInquiryTagDelete={this.handleInquiryTagDelete}
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
  onChange: PropTypes.func,
  handleSelect: PropTypes.func,
  handleOfferTagChange: PropTypes.func,
  handleInquiryTagChange: PropTypes.func,
  handleOfferTagDelete: PropTypes.func
};

export default LeftSidebarFilter;
