import React, { Component } from "react";
import { LeftSidebarFilter } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import { setCookie, getCookie } from "../../../lib/utils/helpers";

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

const languageItems = [
  {
    name: Translations.languages.english,
    className: "radio-btn lbl-margin",
    checked: true,
    value: Translations.languages.english
  },
  {
    name: Translations.languages.german,
    className: "radio-btn ",
    checked: false,
    value: Translations.languages.german
  }
];

const targetGroupOptions = staticData;

const radiusItems = staticData;

const categoryItems = staticData;

const offerItems = staticData;

const inquiryItems = staticData;

const languageItem = languageItems;

class CampaignCompanyFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApply: false,
      filData: [],
      currentLanguage: Translations.getLanguage()
    };
  }

  render() {
    const languageItems = [
      {
        name: Translations.languages.english,
        className: "radio-btn lbl-margin",
        checked: true,
        value: Translations.languages.english
      },
      {
        name: Translations.languages.german,
        className: "radio-btn ",
        checked: false,
        value: Translations.languages.german
      }
    ];

    const languageItem = languageItems;

    const Filters = [
      {
        name: Translations.left_sidebar_filter.radio_change_language.name,
        className: "filter-title",
        type: Translations.left_sidebar_filter.radio_change_language.type,
        items: languageItem
      },
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
    return (
      <div className="left-filters">
        <LeftSidebarFilter
          filters={Filters}
          onChange={this.handleOnChange}
          filterApply={this.state.filterApply}
          handleSelect={this.handleSelect}
          handleLanguageSwitch={this.handleLanguageSwitch}
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

  handleLanguageSwitch = languageCode => {
    // set cookie for default language
    setCookie("interfaceLanguage", languageCode, 90);
    // set language using language code
    Translations.setLanguage(languageCode || "en");
    // we need to update state to re render this component on language switch
    this.setState({
      currentLanguage: Translations.getLanguage()
    });
  };

}

CampaignCompanyFilter.propTypes = {
  handleApplyClick: PropTypes.func,
  handleSelect: PropTypes.func,
  handleLanguageSwitch: PropTypes.func
};

export default CampaignCompanyFilter;
