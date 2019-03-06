import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const ReportedContentMB = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.reported_content_mb}
      history={history}
    />
  );
};

ReportedContentMB.propTypes = {
  history: PropTypes.any
};

export default ReportedContentMB;
