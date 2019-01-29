import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

const CampaignsInformation = ({ history }) => {
  return <CMSContent title={'Campaign'} history={history}/>
}

CampaignsInformation.propTypes = {
  history: PropTypes.any,
};

export default CampaignsInformation;
