import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const Verification = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.verification} history={history} />
  );
};

Verification.propTypes = {
  history: PropTypes.any
};

export default Verification;
