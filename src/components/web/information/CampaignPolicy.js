import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const CampaignPolicy = ({ history }) => {
  return <CMSContent title={'Campaign Policy'} history={history}/>
}

CampaignPolicy.propTypes = {
  history: PropTypes.any,
};

export default CampaignPolicy;
