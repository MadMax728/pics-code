import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLanguage } from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

const languageData = [
  {
    id: Translations.languages.english,
    value: Translations.languages.english,
    isChecked: "en",
    className: "language-radio-input"
  },
  {
    id: Translations.languages.german,
    value: Translations.languages.german,
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
    const { value, className, languageList } = this.props;
    return (
      <div className="languageBtn">
        {languageData.map(option => (
          <div key={option.value}>
            <input
              type="radio"
              className={option.className}
              id={option.value}
              name={option.value}
              value={option.value}
              defaultChecked={option.isChecked === this.state.currentLanguage}
              onChange={this.handleLanguage}
            />
            <span>{option.value}</span>
          </div>
        ))}
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
    const selectedValue = event.target.value;
    if (selectedValue === "English") {
      this.props.handleLanguageSwitch("en");
      this.setState({ currentLanguage: event.target.value });
    } else if (selectedValue === "German") {
      this.props.handleLanguageSwitch("de");
      this.setState({ currentLanguage: event.target.value });
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
