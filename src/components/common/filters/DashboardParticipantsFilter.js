import React, { Component } from "react";
import { LeftSidebarFilter } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as enumerations from "../../../lib/constants/enumerations";
import { setCookie, getCookie } from "../../../lib/utils/helpers";
import { Route } from "react-router-dom";

const staticData = [
  { name: "option1", className: "", value: "option1" },
  { name: "option2", className: "", value: "option2" }
];

const categoryData = staticData;

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

const targetGroupData = [
  {
    name: enumerations.target_group.company,
    className: "",
    value: enumerations.target_group.company
  },
  {
    name: enumerations.target_group.female_and_male,
    className: "",
    value: enumerations.target_group.female_and_male
  },
  {
    name: enumerations.target_group.female,
    className: "",
    value: enumerations.target_group.female
  },
  {
    name: enumerations.target_group.male,
    className: "",
    value: enumerations.target_group.male
  }
];

const targetGroupOptions = targetGroupData;

const radiusItems = staticData;

const categoryItems = categoryData;

const offerItems = staticData;

const inquiryItems = staticData;

class DashboardParticipantsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApply: false,
      filData: [],
      categoryList: [],
      currentLanguage: Translations.getLanguage()
    };
  }

  render() {
    const languageItem = [
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
    const genderItems = [
      {
        name: Translations.gender.all,
        className: "radio-btn lbl-margin",
        checked: true,
        value: Translations.gender.all
      },
      {
        name: Translations.gender.male,
        className: "radio-btn ",
        checked: false,
        value: Translations.gender.male
      },
      {
        name: Translations.gender.female,
        className: "radio-btn ",
        checked: false,
        value: Translations.gender.female
      }
    ];

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
        name: Translations.left_sidebar_filter.content.name,
        className: "filter-title",
        type: Translations.left_sidebar_filter.content.type,
        items: contentItems
      },
      {
        name: Translations.left_sidebar_filter.location.name,
        className: "filter-title",
        type: Translations.left_sidebar_filter.location.type,
        items: []
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
      }
    ];
    Translations.setLanguage(getCookie("interfaceLanguage") || "en");
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

  componentDidMount = () => {};

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

const mapStateToProps = state => ({
  categoryList: state.selectData,
  radiusList: state.selectData
});

const mapDispatchToProps = {};

DashboardParticipantsFilter.propTypes = {
  handleApplyClick: PropTypes.func,
  categoryList: PropTypes.any,
  handleSelect: PropTypes.func,
  route: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardParticipantsFilter);
