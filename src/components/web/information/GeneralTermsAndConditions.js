import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const GeneralTermsAndConditions = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.general_terms_and_conditions}
      history={history}
    />
  );
};

GeneralTermsAndConditions.propTypes = {
  history: PropTypes.any
};

export default GeneralTermsAndConditions;
