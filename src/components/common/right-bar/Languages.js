import React, { Component } from "react";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";

class Languages extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
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
    const { languages } = this.state;
    return (
      <div className="right_language padding-15">
        <div className="normal_title">{Translations.base_footer.language}</div>
        {languages.map(lang => {
          return (
            <div
              key={lang.ios}
              onKeyDown={this.handleKeyDown}
              className={lang.ios === Translations._language ? "active" : ""}
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
  };

  /**
   * handle german language
   */
  handleGerman = () => {
    // needs to send language code to handle language
    // make sure we have props is exist with method handleLanguageSwitch
    this.props.handleLanguageSwitch("de");
  };

  handleKeyDown = () => {};

 
}

Languages.propTypes = {
  handleLanguageSwitch: PropTypes.func.isRequired
};

export default Languages;
