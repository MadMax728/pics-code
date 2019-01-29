import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const GeneralTermsAndConditions = ({ history }) => {
  return <CMSContent title={'General Terms and Conditions'} history={history}/>
}

GeneralTermsAndConditions.propTypes = {
  history: PropTypes.any,
};

export default GeneralTermsAndConditions;
