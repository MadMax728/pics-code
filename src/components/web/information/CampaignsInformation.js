import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CampaignsInformation = ({ history }) => {
  return (
    <CMSContent title={Translations.cms_menu.campaign} history={history} />
  );
};

CampaignsInformation.propTypes = {
  history: PropTypes.any
};

export default CampaignsInformation;
