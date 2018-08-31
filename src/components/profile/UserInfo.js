import React from "react";
import * as images from "../../constants/images";

const UserInfo = () => {
  return (
    <div>
      <div className="user_info">
        <div className="col-sm-3 col-md-2 bg-white no-padding">
          <img src={images.profile_pic} width="100%" alt="profile" />
        </div>
        <div className="col-sm-12 col-md-10 no-padding-right">
          <div className="bg-white padding-25 user_details">
            <div className="user_name">User Name</div>
            <div className="settings">
              <img src={images.settings} alt="profile" />
            </div>
            <div className="clearfix" />
            <div className="col-sm-4 slot_one no-padding">
              <span className="size-20">10.00.00 </span>
              <span>Subscriber</span>
              <div className="clearfix" />
              <button className="filled_button">Upload</button>
            </div>
            <div className="col-sm-4 slot_two no-padding">
              <span className="size-20">7 </span>
              <span>Subscribed</span>
              <div className="clearfix" />
              <button className="black_button">Create campaign</button>
            </div>
            <div className="col-sm-4 slot_three no-padding">
              <span className="size-20">2 </span>
              <span>Posts</span>
              <div className="clearfix" />
              <button className="black_button">Create ad</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
