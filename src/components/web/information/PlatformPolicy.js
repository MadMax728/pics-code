import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

PlatformPolicy.propTypes = {
  history: PropTypes.any,
};

const PlatformPolicy = ({ history }) => {
  return <CMSContent title={'Platform Policy'} history={history}/>
}

export default PlatformPolicy;
