import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const FeedbackMB = ({ history }) => {
  return <CMSContent title={'Feedback MB'} history={history}/>
}

FeedbackMB.propTypes = {
  history: PropTypes.any,
};

export default FeedbackMB;