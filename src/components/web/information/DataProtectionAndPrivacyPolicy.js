import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const DataProtectionAndPrivacyPolicy = ({ history }) => {
  return <CMSContent title={'Data Protection and Privacy Policy'} history={history}/>
}

DataProtectionAndPrivacyPolicy.propTypes = {
  history: PropTypes.any,
};

export default DataProtectionAndPrivacyPolicy;
