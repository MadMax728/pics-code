import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const AboutUs = ({ history }) => {
  return <CMSContent title={'About us'} history={history}/>
}

AboutUs.propTypes = {
  history: PropTypes.any,
};

export default AboutUs;