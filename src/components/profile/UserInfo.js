import React from "react";
import * as images from "../../constants/images";

const UserInfo = () => {
  return (
    <div>
      <div class="user_info">
        <div class="col-sm-3 col-md-2 bg-white no-padding">
          <img src={images.profile_pic} width="100%" alt="profile" />
        </div>
        <div class="col-sm-12 col-md-10 no-padding-right">
          <div class="bg-white padding-25 user_details">
            <div class="user_name">User Name</div>
            <div class="settings">
              <img src={images.settings} alt="profile" />
            </div>
            <div class="clearfix" />
            <div class="col-sm-4 slot_one no-padding">
              <span class="size-20">10.00.00 </span>
              <span>Subscriber</span>
              <div class="clearfix" />
              <button class="filled_button">Upload</button>
            </div>
            <div class="col-sm-4 slot_two no-padding">
              <span class="size-20">7 </span>
              <span>Subscribed</span>
              <div class="clearfix" />
              <button class="black_button">Create campaign</button>
            </div>
            <div class="col-sm-4 slot_three no-padding">
              <span class="size-20">2 </span>
              <span>Posts</span>
              <div class="clearfix" />
              <button class="black_button">Create ad</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
