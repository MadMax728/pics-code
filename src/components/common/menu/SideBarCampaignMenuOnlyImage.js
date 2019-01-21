import React from "react";
import { Auth } from "../../../auth";
import * as images from "../../../lib/constants/images";
const storage = Auth.extractJwtFromStorage();

const SideBarCampaignMenuOnlyImage = () => {
  let userInfo;
  if (storage) {
    userInfo = JSON.parse(storage.userInfo);
  }
  const profile_img = userInfo? userInfo.profileUrl : images.campaign1;
  return (
    <div>
      <div className="user_info">
        <div className="bg-white no-padding">
          <img src={profile_img} width="100%" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default SideBarCampaignMenuOnlyImage;
