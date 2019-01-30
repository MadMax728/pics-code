import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const LegalNotice = ({ history }) => {
  return <CMSContent title={'Legal Notice'} history={history}/>
}

LegalNotice.propTypes = {
  history: PropTypes.any,
};

export default LegalNotice;