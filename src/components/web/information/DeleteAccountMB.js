import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const DeleteAccountMB = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.delete_account_mb}
      history={history}
    />
  );
};

DeleteAccountMB.propTypes = {
  history: PropTypes.any
};

export default DeleteAccountMB;
