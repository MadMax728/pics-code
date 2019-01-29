import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const OurVision = ({ history }) => {
  return <CMSContent title={'Our Vision'} history={history}/>
}

OurVision.propTypes = {
  history: PropTypes.any,
};

export default OurVision;
