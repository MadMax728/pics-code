import React from "react";
import { Translations } from "../../../../lib/translations";

const Language = [
  {
    name: Translations.languages.german
  },
  {
    name: Translations.languages.english
  }
];

const Languages = () => {
  return (
    <div className="right_language padding-15">
      <div className="normal_title">Language:</div>
      {Language.map((lang, index) => {
        return (
          <div key={index} className={"active"}>
            {lang.name}
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
