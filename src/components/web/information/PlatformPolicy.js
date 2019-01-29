import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const PlatformPolicy = ({ history }) => {
  return <CMSContent title={'Platform Policy'} history={history}/>
}

PlatformPolicy.propTypes = {
  history: PropTypes.any,
};

export default PlatformPolicy;
