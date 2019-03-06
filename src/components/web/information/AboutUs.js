import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const AboutUs = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.about_us} history={history} />
  );
};

AboutUs.propTypes = {
  history: PropTypes.any
};

export default AboutUs;
