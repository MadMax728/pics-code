import moment from "moment";
import { Translations } from "../lib/translations";
import * as enumerations from "../lib/constants/enumerations";

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

// call this function, passing-in your date
function dateToFromNowDaily(myDate, formatStr) {
  // ensure the date is displayed with today and yesterday
  return moment(myDate).calendar(null, {
    // when the date is closer, specify custom values
    lastWeek: "[Last] dddd",
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: formatStr,
    // when the date is further away, use from-now functionality
    sameElse: formatStr
  });
}

export const DateFormat = (
  date,
  formatStr = Translations.date_format.date,
  shouldDateFormat = false
) => {
  if (shouldDateFormat && date) {
    return moment(date).format(formatStr);
  } else if (date) {
    return dateToFromNowDaily(date, formatStr);
  }

  return ""; //required for other components.
};

export const toYesNoCase = isCheck => {
  return isCheck ? Translations.general.yes : Translations.general.no;
};

export const getBackendPostType = type => {
  let postType = "";
  if (
    type.postType.toLowerCase() === enumerations.contentTypes.companyCampaign ||
    type.postType.toLowerCase() === enumerations.contentTypes.creatorCampaign
  ) {
    postType = "Campaign";
  } else if (
    type.postType.toLowerCase() ===
    enumerations.contentTypes.companyParticipantCampaign
  ) {
    postType = "Participant";
  } else if (type.postType.toLowerCase() === enumerations.contentTypes.ad) {
    postType = "Advertise";
  } else if (
    type.postType.toLowerCase() === enumerations.contentTypes.mediaPost
  ) {
    postType = type.typeContent;
  }
  return postType;
};
