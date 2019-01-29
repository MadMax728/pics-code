import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

TermsOfUse.propTypes = {
  history: PropTypes.any,
};

const TermsOfUse = ({ history }) => {
  return <CMSContent title={'Terms of Use'} history={history}/>
}

export default TermsOfUse;
