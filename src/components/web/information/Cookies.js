import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const Cookies = ({ history }) => {
  return <CMSContent title={Translations.cms_menu.cookies} history={history} />;
};

Cookies.propTypes = {
  history: PropTypes.any
};

export default Cookies;
