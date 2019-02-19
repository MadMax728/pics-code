import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const Support = ({ history }) => {
  return <CMSContent title={Translations.cms_menu.support} history={history} />;
};

Support.propTypes = {
  history: PropTypes.any
};

export default Support;
