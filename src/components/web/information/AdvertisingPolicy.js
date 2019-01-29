import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const AdvertisingPolicy = ({ history }) => {
  return <CMSContent title={'Advertising Policy'} history={history}/>
}

AdvertisingPolicy.propTypes = {
  history: PropTypes.any,
};

export default AdvertisingPolicy;
