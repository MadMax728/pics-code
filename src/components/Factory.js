import moment from "moment";
import { Translations } from "../lib/translations";

export const toTitleCase = str => {
  return !!str
    ? str
        .toLowerCase()
        .split(" ")
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ")
    : "";
};

export const DateFormat = (date, formatStr = Translations.date_format.date) => {
  if (date) {
    return moment(date).format(formatStr);
  }
  return ""; //required for other components.
};

export const toYesNoCase = isCheck => {
  return isCheck ? Translations.general.yes : Translations.general.no;
};
