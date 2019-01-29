import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const Cookies = ({ history }) => {
  return <CMSContent title={'Cookies'} history={history}/>
}

Cookies.propTypes = {
  history: PropTypes.any,
};

export default Cookies;