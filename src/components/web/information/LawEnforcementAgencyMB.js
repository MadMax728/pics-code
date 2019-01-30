import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const LawEnforcementAgencyMB = ({ history }) => {
  return <CMSContent title={'Law Enforcement Agency MB'} history={history}/>
}

LawEnforcementAgencyMB.propTypes = {
  history: PropTypes.any,
};

export default LawEnforcementAgencyMB;

