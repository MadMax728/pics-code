import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const FeedbackMB = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.facebook_mb} history={history} />
  );
};

FeedbackMB.propTypes = {
  history: PropTypes.any
};

export default FeedbackMB;
