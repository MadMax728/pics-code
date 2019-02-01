import React, { Component } from "react";
import PropTypes from "prop-types";
import { RadioBtn, Select, Text } from "../CommonUIComponents";
import { PlaceAutoCompleteLocation } from "../place-auto-complete-location";
import { getCookie } from "../../../lib/utils/helpers";
import {
  SelectCategory,
  SelectOffer,
  SelectInquiry,
  OfferTags,
  InquiryTags,
  SelectRadius,
  SelectTargetGroup,
  RadioButtonLanguages,
  SelectAge
} from "../../common";
import { Translations } from "../../../lib/translations";

class LeftSidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: [],
      offerTagList: [],
      offerTag: [],
      inquiryTagList: [],
      inquiryTag: [],
      language: Translations.base_footer.language
    };
  }

  render() {
    const { filters } = this.props;
    Translations.setLanguage(getCookie("interfaceLanguage") || "en");
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
              {filter.type === "radio_change_language" && (
                <RadioButtonLanguages
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  onChange={this.handleOnChange}
                  handleLanguageSwitch={this.props.handleLanguageSwitch}
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
              {filter.type === "select-radius" && (
                <SelectRadius
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  handleSelect={this.handleSelectList}
                />
              )}
              {filter.type === "select-target-group" && (
                <SelectTargetGroup
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
                  value={this.state.offerTagList}
                  handleOfferTagChange={this.handleOfferTagChange}
                  handleOfferTagDelete={this.handleOfferTagDelete}
                />
              )}
              {filter.type === "text-inquiry-tag" && (
                <InquiryTags
                  foruse={filter.name}
                  name={filter.name}
                  onChange={this.handleOnChange}
                  value={this.state.inquiryTagList}
                  handleInquiryTagChange={this.handleInquiryTagChange}
                  handleInquiryTagDelete={this.handleInquiryTagDelete}
                />
              )}
              {filter.type === "age-select" && (
                <SelectAge
                  foruse={filter.name}
                  name={filter.name}
                  options={filter.items}
                  defaultValue={"select"}
                  handleSelect={this.handleSelectList}
                />
              )}
            </div>
          );
        })}
      </div>
    );
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

  handleLanguageSwitch = language => {
    console.log("filter", language);
  };

  handleOfferTagChange = (id, tag) => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const offerTagList = this.state.offerTagList;
    const offerTag = this.state.offerTag;
    offerTag.push(id);
    offerTagList.push(tag);
    const indexOf = filterData.findIndex(f => {
      return f.name === "offerTagName";
    });

    if (indexOf === -1) {
      filterData.push({ name: "offerTagName", val: offerTag });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: "offerTagName", val: offerTag });
    }
    this.setState({ offerTagList, offerTag, filterData });
    this.props.onChange(filterData);
  };

  handleOfferTagDelete = id => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const { offerTagList, offerTag } = this.state;
    const updatedOfferTagList = offerTagList.filter(
      tag => tag.id !== offerTagList[id].id
    );
    const updatedOfferTags = offerTag.filter(
      tag => tag !== offerTagList[id].id
    );
    const indexOf = filterData.findIndex(f => {
      return f.name === "offerTagName";
    });
    if (indexOf === -1) {
      filterData.push({ name: "offerTagName", val: updatedOfferTags });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: "offerTagName", val: updatedOfferTags });
    }
    if (updatedOfferTags.length === 0) {
      filterData.splice(indexOf, 1);
    }
    this.setState({
      offerTagList: updatedOfferTagList,
      offerTag: updatedOfferTags,
      filterData
    });
    this.props.onChange(filterData);
  };

  handleInquiryTagChange = (id, tag) => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const inquiryTagList = this.state.inquiryTagList;
    const inquiryTag = this.state.inquiryTag;
    inquiryTag.push(id);
    inquiryTagList.push(tag);
    const indexOf = filterData.findIndex(f => {
      return f.name === "inquiryTagName";
    });
    if (indexOf === -1) {
      filterData.push({ name: "inquiryTagName", val: inquiryTag });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({ name: "inquiryTagName", val: inquiryTag });
    }
    this.setState({ inquiryTagList, inquiryTag, filterData });
    this.props.onChange(filterData);
  };

  handleInquiryTagDelete = id => {
    const filterData = this.state.filterData;
    console.log("filterData", filterData);
    const { inquiryTagList, inquiryTag } = this.state;
    const updatedInquiryTagList = inquiryTagList.filter(
      tag => tag.id !== inquiryTagList[id].id
    );
    const updatedInquiryTags = inquiryTag.filter(
      tag => tag !== inquiryTagList[id].id
    );
    const indexOf = filterData.findIndex(f => {
      return f.name === "inquiryTagName";
    });
    if (indexOf === -1) {
      filterData.push({
        name: "inquiryTagName",
        val: updatedInquiryTags
      });
    } else {
      filterData.splice(indexOf, 1);
      filterData.push({
        name: "inquiryTagName",
        val: updatedInquiryTags
      });
    }
    if (updatedInquiryTags.length === 0) {
      filterData.splice(indexOf, 1);
    }
    this.setState({
      inquiryTagList: updatedInquiryTagList,
      inquiryTag: updatedInquiryTags,
      filterData
    });
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
  // handleSelect: PropTypes.func,
  // handleOfferTagChange: PropTypes.func,
  // handleInquiryTagChange: PropTypes.func,
  // handleOfferTagDelete: PropTypes.func,
  handleLanguageSwitch: PropTypes.func
};

export default LeftSidebarFilter;
