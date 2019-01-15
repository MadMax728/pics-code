import React from "react";
import * as images from "../../../lib/constants/images";

const UserPicLoading  = () => {
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-6 pic-block-wrapr pic-left-block padding-lr-5">
          <div className="pic-block gray_content">
            <img src={images.placeholder_pic} alt="profile_pic" />
            <div className="name-wrapper gray_box">
              <div className="username" />
              <div className="name" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 pic-block-wrapr pic-right-block padding-lr-5">
          <div className="pic-block gray_content">
            <img src={images.placeholder_pic} alt="profile_pic" />
            <div className="name-wrapper gray_box">
              <div className="username" />
              <div className="name" />
            </div>
          </div>
        </div>
      </div>
  );
}
export default UserPicLoading;
