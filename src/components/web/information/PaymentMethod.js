import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const PaymentMethod = ({ history }) => {
  return (
    <CMSContent
      title={Translations.cms_menu.payment_method}
      history={history}
    />
  );
};

PaymentMethod.propTypes = {
  history: PropTypes.any
};

export default PaymentMethod;
