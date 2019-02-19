import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLanguage } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";
import { Input, RadioButton, RadioBtn } from "../../ui-kit";
import { language } from "../../../lib/constants/enumerations";

const languageData = [
  {
    id: Translations.languages.english,
    value: "en",
    label: Translations.languages.english,
    isChecked: "en",
    className: "language-radio-input"
  },
  {
    id: Translations.languages.german,
    value: "de",
    label: Translations.languages.german,
    isChecked: "de",
    className: "language-radio-input"
  }
];

class RadioButtonLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageList: [],
      currentLanguage: Translations.getLanguage()
    };
  }

  componentWillMount = () => {
    this.props.getLanguage(languageData);
  };

  render() {
    return (
      <div className="languageBtn">
        <div className="">
          <RadioButton
            type="radio"
            id="en"
            name="language"
            value="en"
            defaultChecked={this.state.currentLanguage === "en"}
            className="language-radio-input"
            onChange={this.handleLanguage}
          />
          <span>{"English"}</span>
        </div>
          
          <div className="">
            <RadioButton
              type="radio"
              id="de"
              name="language"
              value="de"
              defaultChecked={this.state.currentLanguage === "de"}
              className="language-radio-input"
              onChange={this.handleLanguage}
            />
            <span>{"German"}</span>
          </div>
      </div>
    );
  }

  componentDidMount = () => {
    if (this.props.languageList && this.props.languageList.languages) {
      this.setState({
        languageList: this.props.languageList.languages
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({ languageList: [] });
  };

  handleLanguage = event => {
    const selectedValue = event.values.val;
    if (selectedValue === "en") {
      this.props.handleLanguageSwitch("en");
    } else if (selectedValue === "de") {
      this.props.handleLanguageSwitch("de");
      this.setState({ currentLanguage: "de" });
    }
  };
}

const mapStateToProps = state => ({
  languageList: state.selectData
});

const mapDispatchToProps = {
  getLanguage
};

const propTypes = {
  value: PropTypes.any,
  languageList: PropTypes.any,
  className: PropTypes.string,
  getLanguage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleLanguageSwitch: PropTypes.func
};

RadioButtonLanguages.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButtonLanguages);
