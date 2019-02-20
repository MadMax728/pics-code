import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const PlatformPolicy = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.platform_policy}
      history={history}
    />
  );
};

PlatformPolicy.propTypes = {
  history: PropTypes.any
};

export default PlatformPolicy;
