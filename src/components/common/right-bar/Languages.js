import React, { Component } from "react";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";

class Languages extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeLanguage: Translations._language,
      languages: [
        {
          name: Translations.languages.german,
          ios: "de",
          handleEvent: this.handleGerman
        },
        {
          name: Translations.languages.english,
          ios: "en",
          handleEvent: this.handleEnglish
        }
      ]
    };
  }

  render() {
    const { languages, activeLanguage } = this.state;
    return (
      <div className="right_language padding-15">
        <div className="normal_title">{Translations.base_footer.language}</div>
        {languages.map(lang => {
          return (
            <div
              key={lang.ios}
              onKeyDown={this.handleKeyDown}
              className={lang.ios === activeLanguage ? "active" : ""}
              onClick={lang.handleEvent}
              role="button"
              tabIndex="0"
            >
              {lang.name}
            </div>
          );
        })}
      </div>
    );
  }

  /**
   * handle english
   */
  handleEnglish = () => {
    // needs to send language code to handle language
    // make sure we have props is exist with method handleLanguageSwitch
    this.props.handleLanguageSwitch("en");
    this.setState({ activeLanguage: "en" });
  };

  /**
   * handle german language
   */
  handleGerman = () => {
    // needs to send language code to handle language
    // make sure we have props is exist with method handleLanguageSwitch
    this.props.handleLanguageSwitch("de");
    this.setState({ activeLanguage: "de" });
  };

  handleKeyDown = () => {};
}

Languages.propTypes = {
  handleLanguageSwitch: PropTypes.func.isRequired
};

export default Languages;
