import React, { Component } from "react";
import { LeftSidebarFilter } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const staticData = [
  { name: "option1", className: "", value: "option1" },
  { name: "option2", className: "", value: "option2" }
];

const genderItems = [
  {
    name: "All",
    className: "radio-btn lbl-margin",
    checked: true,
    value: "all"
  },
  {
    name: "Male",
    className: "radio-btn lbl-margin",
    checked: false,
    value: "male"
  },
  {
    name: "Female",
    className: "radio-btn",
    checked: false,
    value: "female"
  }
];

const relevanceItems = [
  {
    name: "New",
    className: "radio-btn lbl-margin",
    checked: true,
    value: "all"
  },
  {
    name: "Favourites",
    className: "radio-btn ",
    checked: false,
    value: "videos"
  }
];

const radiusItems = staticData;

const categoryItems = staticData;

const ageItems = staticData;

const Filters = [
  {
    name: Translations.left_sidebar_filter.relevance.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.relevance.type,
    items: relevanceItems
  },
  {
    name: Translations.left_sidebar_filter.location.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.location.type,
    items: []
  },
  {
    name: Translations.left_sidebar_filter.radius.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.radius.type,
    items: radiusItems
  },
  {
    name: Translations.left_sidebar_filter.category.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.category.type,
    items: categoryItems
  },
  {
    name: Translations.left_sidebar_filter.gender.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.gender.type,
    items: genderItems
  },
  {
    name: Translations.left_sidebar_filter.age.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.age.type,
    items: ageItems
  }
];

class ParticipantsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApply: false,
      filData: []
    };
  }

  handleResetFilterClick = () => {
    this.setState({ filterApply: false });
  };

  handleApplyClick = () => {
    this.setState({ filterApply: true });
    this.props.handleApplyClick(this.state.filData);
  };

  handleOnChange = filterData => {
    this.setState({ filData: filterData });
  };

  handleFilter = () => {
    return (
      <LeftSidebarFilter
        filters={Filters}
        onChange={this.handleOnChange}
        filterApply={this.state.filterApply}
      />
    );
  };

  render() {
    return (
      <div className="left-filters">
        <LeftSidebarFilter
          filters={Filters}
          onChange={this.handleOnChange}
          filterApply={this.state.filterApply}
        />
        <div className="filter-btn-wrapper">
          {this.state.filterApply ? (
            <button
              className="black_button"
              onClick={this.handleResetFilterClick}
            >
              Reset filters
            </button>
          ) : (
            <button className="black_button" onClick={this.handleApplyClick}>
              Apply
            </button>
          )}
        </div>
      </div>
    );
  }
}

ParticipantsFilter.propTypes = {
  handleApplyClick: propTypes.func
};

export default ParticipantsFilter;
