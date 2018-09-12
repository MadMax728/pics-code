import React from "react";

import * as images from "../../../../lib/constants/images";

const Users = () => {
  return (
    <div className="padding-rl-10 middle-section">
      <div className="user-wrapper">
        <div className="col-sm-6 pic-left-block">
          <div className="pic-block">
            <img src={images.pic_1} alt={"pic-1"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pic-right-block">
          <div className="pic-block">
            <img src={images.pic_2} alt={"pic-2"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="col-sm-6 pic-left-block">
          <div className="pic-block">
            <img src={images.pic_3} alt={"pic-3"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pic-right-block">
          <div className="pic-block">
            <img src={images.pic_4} alt={"pic-4"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="col-sm-6 pic-left-block">
          <div className="pic-block">
            <img src={images.pic_1} alt={"pic-1"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pic-right-block">
          <div className="pic-block">
            <img src={images.pic_5} alt={"pic-5"} />
            <div className="name-wrapper">
              <div className="username">User name</div>
              <div className="name">Name</div>
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
