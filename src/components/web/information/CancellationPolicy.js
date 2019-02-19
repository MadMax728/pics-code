import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CancellationPolicy = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.cancellation_policy}
      history={history}
    />
  );
};

CancellationPolicy.propTypes = {
  history: PropTypes.any
};

export default CancellationPolicy;
