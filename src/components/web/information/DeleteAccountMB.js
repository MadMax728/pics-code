import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const DeleteAccountMB = ({ history }) => {
  return <CMSContent title={'Delete Account MB'} history={history}/>
}

DeleteAccountMB.propTypes = {
  history: PropTypes.any,
};

export default DeleteAccountMB;