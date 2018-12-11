import React, { Component } from "react";
import { LeftSidebarFilter } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";

const staticData = [
  { name: "all", className: "", value: "All" },
  { name: "outstanding", className: "", value: "Outstanding" },
  { name: "processed", className: "", value: "Processed" },
  { name: "not_processed", className: "", value: "Not processed" }
];

const reviewItems = staticData;

const languageItems = [
  {
    name: "All",
    className: "radio-btn ",
    checked: true,
    value: "all"
  },
  {
    name: "German",
    className: "radio-btn lbl-margin",
    checked: false,
    value: "german"
  },
  {
    name: "English",
    className: "radio-btn ",
    checked: true,
    value: "english"
  }
];

const Filters = [
  {
    name: Translations.review_filter.status.name,
    className: "filter-title",
    type: Translations.review_filter.status.type,
    items: reviewItems
  },
  {
    name: Translations.left_sidebar_filter.language.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.language.type,
    items: languageItems
  }
];

class ReviewFilter extends Component {
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
              {Translations.filter.reset_filter}
            </button>
          ) : (
            <button className="black_button" onClick={this.handleApplyClick}>
              {Translations.filter.apply}
            </button>
          )}
        </div>
      </div>
    );
  }
}

ReviewFilter.propTypes = {
  handleApplyClick: PropTypes.func
};

export default ReviewFilter;
