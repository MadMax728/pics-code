import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as images from "../../../../lib/constants/images";

const SideBarCampaignMenuOnlyImage = () => {
  return (
    <div>
      <div className="user_info">
        <div className="bg-white no-padding">
          <img src={images.campaign1} width="100%" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default SideBarCampaignMenuOnlyImage;
