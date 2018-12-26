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

export const DateFormat = (date, formatStr = Translations.date_format.date) => {
  if (date) {
    return moment(date).format(formatStr);
  }
  return ""; //required for other components.
};

export const toYesNoCase = isCheck => {
  return isCheck ? Translations.general.yes : Translations.general.no;
};


export const getBackendPostType = (type) => {
  let postType = '';
  if(type.postType.toLowerCase() === enumerations.contentTypes.companyCampaign || type.postType.toLowerCase() === enumerations.contentTypes.creatorCampaign) {
      postType = 'Campaign';
  }
  else if(type.postType.toLowerCase() === enumerations.contentTypes.companyParticipantCampaign) {
      postType = 'Participant';                    
  }
  else if(type.postType.toLowerCase() === enumerations.contentTypes.ad) {
    postType = 'Advertise';                    
  }
  else if(type.postType.toLowerCase() === enumerations.contentTypes.mediaPost) {
      postType = type.typeContent;
  }
  return postType;
}