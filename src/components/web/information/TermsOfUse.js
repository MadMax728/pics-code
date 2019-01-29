import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const TermsOfUse = ({ history }) => {
  return <CMSContent title={'Terms of Use'} history={history}/>
}

TermsOfUse.propTypes = {
  history: PropTypes.any,
};

export default TermsOfUse;
