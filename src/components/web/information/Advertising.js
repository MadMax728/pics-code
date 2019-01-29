import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

Advertising.propTypes = {
  history: PropTypes.any,
};

const Advertising = ({ history }) => {
  return <CMSContent title={'Advertising'} history={history}/>
}

export default Advertising;
