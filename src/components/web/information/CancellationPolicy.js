import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const CancellationPolicy = ({ history }) => {
  return <CMSContent title={'Cancellation Policy'} history={history}/>
}

CancellationPolicy.propTypes = {
  history: PropTypes.any,
};

export default CancellationPolicy;
