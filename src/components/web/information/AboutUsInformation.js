import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const AboutUsInformation = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.about_us_information}
      history={history}
    />
  );
};

AboutUsInformation.propTypes = {
  history: PropTypes.any
};

export default AboutUsInformation;
