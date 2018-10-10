import React, { Component } from "react";
import { LeftSidebarFilter } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const staticData = [
  { name: "option1", className: "", value: "option1" },
  { name: "option2", className: "", value: "option2" }
];

const reviewItems = staticData;

const Filters = [
  {
    name: Translations.review_filter.status.name,
    className: "filter-title",
    type: Translations.review_filter.status.type,
    items: reviewItems
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

ReviewFilter.propTypes = {
  handleApplyClick: propTypes.func
};

export default ReviewFilter;
