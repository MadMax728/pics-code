import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const Support = ({ history }) => {
  return <CMSContent title={'Support'} history={history}/>
}

Support.propTypes = {
  history: PropTypes.any,
};

export default Support;
