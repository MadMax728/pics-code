import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const TermsOfUse = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.terms_use} history={history} />
  );
};

TermsOfUse.propTypes = {
  history: PropTypes.any
};

export default TermsOfUse;
