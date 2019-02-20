import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const ReportProblem = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.report_problem}
      history={history}
    />
  );
};

ReportProblem.propTypes = {
  history: PropTypes.any
};

export default ReportProblem;
