import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const NetzDg = ({ history }) => {
  return <CMSContent title={Translations.cms_menu.netzdg} history={history} />;
};

NetzDg.propTypes = {
  history: PropTypes.any
};

export default NetzDg;
