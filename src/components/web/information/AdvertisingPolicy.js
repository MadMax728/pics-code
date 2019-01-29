import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

AdvertisingPolicy.propTypes = {
  history: PropTypes.any,
};

const AdvertisingPolicy = ({ history }) => {
  return <CMSContent title={'Advertising Policy'} history={history}/>
}

export default AdvertisingPolicy;
