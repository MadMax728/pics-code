import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const LawEnforcementAgencyMB = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.law_enforcement_agency_mb}
      history={history}
    />
  );
};

LawEnforcementAgencyMB.propTypes = {
  history: PropTypes.any
};

export default LawEnforcementAgencyMB;
