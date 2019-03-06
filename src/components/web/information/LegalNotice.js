import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const LegalNotice = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.legal_notice} history={history} />
  );
};

LegalNotice.propTypes = {
  history: PropTypes.any
};

export default LegalNotice;
