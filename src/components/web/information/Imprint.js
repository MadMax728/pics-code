import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const Imprint = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.imprint}
      history={history}
    />
  );
};

Imprint.propTypes = {
  history: PropTypes.any
};

export default Imprint;
