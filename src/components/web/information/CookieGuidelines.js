import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CookieGuidelines = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.cookie_guidelines}
      history={history}
    />
  );
};

CookieGuidelines.propTypes = {
  history: PropTypes.any
};

export default CookieGuidelines;
