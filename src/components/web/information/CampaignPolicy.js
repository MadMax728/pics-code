import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const CampaignPolicy = ({ history }) => {
  return (
    <CMSContent
      title={Translations.information_menu.campaign_policy}
      history={history}
    />
  );
};

CampaignPolicy.propTypes = {
  history: PropTypes.any
};

export default CampaignPolicy;
