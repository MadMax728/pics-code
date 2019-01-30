import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const ReportedContentMB = ({ history }) => {
  return <CMSContent title={'Reported Content MB'} history={history}/>
}

ReportedContentMB.propTypes = {
  history: PropTypes.any,
};

export default ReportedContentMB;