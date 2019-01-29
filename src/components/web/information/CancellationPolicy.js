import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

CancellationPolicy.propTypes = {
  history: PropTypes.any,
};

const CancellationPolicy = ({ history }) => {
  return <CMSContent title={'Cancellation Policy'} history={history}/>
}

export default CancellationPolicy;
