import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const BrandedContentGuidelines = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.branded_content_guidelines}
      history={history}
    />
  );
};

BrandedContentGuidelines.propTypes = {
  history: PropTypes.any
};

export default BrandedContentGuidelines;
