import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const PaymentMethod = ({ history }) => {
  return <CMSContent title={'Payment Method'} history={history}/>
}

PaymentMethod.propTypes = {
  history: PropTypes.any,
};

export default PaymentMethod;