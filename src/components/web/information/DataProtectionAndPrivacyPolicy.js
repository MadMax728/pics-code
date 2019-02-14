import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const DataProtectionAndPrivacyPolicy = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.data_protection_and_privacy_policy}
      history={history}
    />
  );
};

DataProtectionAndPrivacyPolicy.propTypes = {
  history: PropTypes.any
};

export default DataProtectionAndPrivacyPolicy;
