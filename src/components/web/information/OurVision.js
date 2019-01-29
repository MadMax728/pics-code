import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

OurVision.propTypes = {
  history: PropTypes.any,
};

const OurVision = ({ history }) => {
  return <CMSContent title={'Our Vision'} history={history}/>
}

export default OurVision;
