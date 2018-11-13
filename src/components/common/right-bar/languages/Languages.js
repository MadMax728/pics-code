import React, { Component } from "react";
import { Translations } from "../../../../lib/translations";
import LocalizedStrings from "react-localization";

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

  handleEnglish = () => {
    Translations.setLanguage("en");
    console.log(Translations);
  };

  handleGerman = () => {
    Translations.setLanguage("de");
    console.log(Translations);
  };

  handleKeyDown = () => {};

  render() {
    const { languages } = this.state;
    return (
      <div className="right_language padding-15">
        <div className="normal_title">Language:</div>
        {languages.map((lang, index) => {
          return (
            <div
              key={index}
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
}

export default Languages;
