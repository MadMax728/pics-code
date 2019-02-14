import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const BusinessTermsCondition = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.business_terms_condition}
      history={history}
    />
  );
};

BusinessTermsCondition.propTypes = {
  history: PropTypes.any
};

export default BusinessTermsCondition;
