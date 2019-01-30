import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const AboutUsInformation = ({ history }) => {
  return <CMSContent title={'About us Information'} history={history}/>
}

AboutUsInformation.propTypes = {
  history: PropTypes.any,
};

export default AboutUsInformation;

