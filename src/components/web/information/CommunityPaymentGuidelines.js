import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CommunityPaymentGuidelines = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.community_payment_guidelines}
      history={history}
    />
  );
};

CommunityPaymentGuidelines.propTypes = {
  history: PropTypes.any
};

export default CommunityPaymentGuidelines;
