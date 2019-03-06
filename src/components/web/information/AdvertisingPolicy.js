import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const AdvertisingPolicy = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.advertising_policy}
      history={history}
    />
  );
};

AdvertisingPolicy.propTypes = {
  history: PropTypes.any
};

export default AdvertisingPolicy;
