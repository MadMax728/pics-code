import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

CampaignPolicy.propTypes = {
  history: PropTypes.any,
};

const CampaignPolicy = ({ history }) => {
  return <CMSContent title={'Campaign Policy'} history={history}/>
}

export default CampaignPolicy;
