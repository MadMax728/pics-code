import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const NetzDg = ({ history }) => {
  return <CMSContent title={'NetzDg'} history={history}/>
}

NetzDg.propTypes = {
  history: PropTypes.any,
};

export default NetzDg;