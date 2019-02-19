import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const Advertising = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.advertising} history={history} />
  );
};

Advertising.propTypes = {
  history: PropTypes.any
};

export default Advertising;
