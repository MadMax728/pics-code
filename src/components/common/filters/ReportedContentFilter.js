import React, { Component } from "react";
import { LeftSidebarFilter } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as enumerations from "../../../lib/constants/enumerations";
import { Scrollbars } from "react-custom-scrollbars";

const relevanceItems = [
  { name: "all", className: "", value: "All" },
  { name: "new", className: "", value: "New" }
];
const statusItems = [
  { name: "all", className: "", value: "All" },
  { name: "outstanding", className: "", value: "Outstanding" },
  { name: "processed", className: "", value: "Processed" },
  { name: "not_processed", className: "", value: "Not processed" }
];

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
    name: Translations.reported_content_filter.relevance.name,
    className: "filter-title",
    type: Translations.reported_content_filter.relevance.type,
    items: relevanceItems
  },
  {
    name: Translations.reported_content_filter.status.name,
    className: "filter-title",
    type: Translations.reported_content_filter.status.type,
    items: statusItems
  },
  {
    name: Translations.left_sidebar_filter.language.name,
    className: "filter-title",
    type: Translations.left_sidebar_filter.language.type,
    items: languageItems
  }
];

class ReportedContentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApply: false,
      filData: [],
      height: window.innerHeight
    };
  }

  render() {
    const { isRank } = this.props;
    const { filterApply, height } = this.state;
    return (
      <Scrollbars style={{ height: `${height - 220}px` }}>
        <div className="left-filters">
          <LeftSidebarFilter
            filters={Filters}
            onChange={this.handleOnChange}
            filterApply={filterApply}
            handleSelect={this.handleSelect}
            isRank={isRank}
            handleResetFilterClick={this.handleResetFilterClick}
            handleApplyClick={this.handleApplyClick}
            isNotFilter
          />
        </div>
      </Scrollbars>
    );
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

  handleSelect = filterData => {
    this.setState({ filData: filterData });
  };
}

ReportedContentFilter.propTypes = {
  handleApplyClick: PropTypes.func,
  handleSelect: PropTypes.func,
  isRank: PropTypes.string
};

export default ReportedContentFilter;
