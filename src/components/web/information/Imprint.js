import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const Imprint = ({ history }) => {
  return <CMSContent title={'Imprint'} history={history}/>
}

Imprint.propTypes = {
  history: PropTypes.any,
};

export default Imprint;
