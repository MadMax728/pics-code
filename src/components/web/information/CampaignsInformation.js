import React from "react";
import CMSContent from "../common/CMSContent";
import PropTypes from "prop-types";

CampaignsInformation.propTypes = {
  history: PropTypes.any,
};

const CampaignsInformation = ({ history }) => {
  return <CMSContent title={'Campaign'} history={history}/>
}

export default CampaignsInformation;
