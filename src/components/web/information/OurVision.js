import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const OurVision = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.our_vision} history={history} />
  );
};

OurVision.propTypes = {
  history: PropTypes.any
};

export default OurVision;
