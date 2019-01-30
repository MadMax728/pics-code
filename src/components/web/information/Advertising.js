import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const Advertising = ({ history }) => {
  return <CMSContent title={'Advertising'} history={history}/>
}

Advertising.propTypes = {
  history: PropTypes.any,
};

export default Advertising;
