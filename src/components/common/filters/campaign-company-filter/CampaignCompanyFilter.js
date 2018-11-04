import React, { Component } from "react";
import { LeftSidebarFilter } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const staticData = [
  { name: "option1", className: "", value: "option1" },
  { name: "option2", className: "", value: "option2" }
];

const contentItems = [
  {
    name: "All",
    className: "radio-btn lbl-margin",
    checked: true,
    value: "all"
  },
  {
    name: "Images",
    className: "radio-btn lbl-margin",
    checked: false,
    value: "images"
  },
  {
    name: "Videos",
    className: "radio-btn",
    checked: false,
    value: "videos"
  }
];

const procedureItems = [
  {
    name: "All",
    className: "radio-btn lbl-margin",
    checked: true,
    value: "all"
  },
  {
    name: "Public",
    className: "radio-btn lbl-margin",
    checked: false,
    value: "public"
  },
  {
    name: "Anonymous",
    className: "radio-btn",
    checked: false,
    value: "anonymous"
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

const targetGroupOptions = staticData;

const radiusItems = staticData;

const categoryItems = staticData;

const offerItems = staticData;

const inquiryItems = staticData;

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
    name: Translations.left_sidebar_filter.procedure.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.procedure.type,
    items: procedureItems
  },
  {
    name: Translations.left_sidebar_filter.content.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.content.type,
    items: contentItems
  },
  {
    name: Translations.left_sidebar_filter.target_group.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.target_group.type,
    items: targetGroupOptions
  },
  {
    name: Translations.left_sidebar_filter.offer.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.offer.type,
    items: offerItems
  },
  {
    name: Translations.left_sidebar_filter.offer_tag.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.offer_tag.type,
    items: []
  },
  {
    name: Translations.left_sidebar_filter.inquiry.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.inquiry.type,
    items: inquiryItems
  },
  {
    name: Translations.left_sidebar_filter.inquiry_tag.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.inquiry_tag.type,
    items: []
  }
];

class CampaignCompanyFilter extends Component {
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

CampaignCompanyFilter.propTypes = {
  handleApplyClick: propTypes.func
};

export default CampaignCompanyFilter;