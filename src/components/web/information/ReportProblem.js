import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const ReportProblem = ({ history }) => {
  return <CMSContent title={'Report Problem'} history={history}/>
}

ReportProblem.propTypes = {
  history: PropTypes.any,
};

export default ReportProblem;