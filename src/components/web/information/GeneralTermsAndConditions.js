import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

GeneralTermsAndConditions.propTypes = {
  history: PropTypes.any,
};

const GeneralTermsAndConditions = ({ history }) => {
  return <CMSContent title={'General Terms and Conditions'} history={history}/>
}

export default GeneralTermsAndConditions;
