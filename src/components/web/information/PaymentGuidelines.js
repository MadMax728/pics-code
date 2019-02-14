import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const PaymentGuidelines = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.payment_guidelines}
      history={history}
    />
  );
};

PaymentGuidelines.propTypes = {
  history: PropTypes.any
};

export default PaymentGuidelines;
