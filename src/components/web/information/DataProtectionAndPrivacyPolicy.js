import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

DataProtectionAndPrivacyPolicy.propTypes = {
  history: PropTypes.any,
};

const DataProtectionAndPrivacyPolicy = ({ history }) => {
  return <CMSContent title={'Data Protection and Privacy Policy'} history={history}/>
}

export default DataProtectionAndPrivacyPolicy;
