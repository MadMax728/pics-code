import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";

class LikeYou extends Component {
  render() {
    return (
      <div className="tab-pane fade active in" id="nav-like">
        <div className="header-notifications">
          <div className="notification-with-subscribe notification-wrapper">
            <img src={images.image} alt={"image1"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="subscribe-btn">
              <button className="blue_button">Like you too</button>
            </div>
          </div>
          <div className="notification-with-subscribe notification-wrapper">
            <img src={images.image} alt={"image2"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="subscribe-btn">
              <button className="filled_button">Message</button>
            </div>
          </div>
          <div className="notification-with-subscribe notification-wrapper">
            <img src={images.image} alt={"image3"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="subscribe-btn">
              <button className="filled_button">Message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LikeYou;
