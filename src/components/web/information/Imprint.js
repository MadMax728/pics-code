import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

Imprint.propTypes = {
  history: PropTypes.any,
};

const Imprint = ({ history }) => {
  return <CMSContent title={'Imprint'} history={history}/>
}

export default Imprint;
