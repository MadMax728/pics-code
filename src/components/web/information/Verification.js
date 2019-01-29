import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const Verification = ({ history }) => {
  return <CMSContent title={'Verification'} history={history}/>
}

Verification.propTypes = {
  history: PropTypes.any,
};

export default Verification;