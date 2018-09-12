import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";

class NotificationsList extends Component {
  render() {
    return (
      <div className="tab-pane fade active in" id="nav-notifications">
        <div className="header-notifications">
          <div className="notification-with-subscribe notification-wrapper">
            <img src={images.image} alt={"image1"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="subscribe-btn">
              <button className="filled_button">Subscribe</button>
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.image} alt={"image2"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="square-image">
              <img src={images.image} alt={"image3"} />
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.image} alt="imagenotification" />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="square-image">
              <img src={images.image} alt={"image4"} />
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.image} alt={"imagenotification2"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="square-image">
              <img src={images.image} alt={"image5"} />
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.image} alt={"image6"} />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="square-image">
              <img src={images.image} alt={"image7"} />
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.notifications_logo} alt="notifications-logo1" />
            <div className="user-info">
              <div className="username">Picstagrah</div>
              <div className="subtitle">Invoice is ready for donwload</div>
              <div className="date">01.01.2000</div>
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.notifications_logo} alt="notifications-logo2" />
            <div className="user-info">
              <div className="username">Picstagrah</div>
              <div className="subtitle">Invoice is ready for donwload</div>
              <div className="date">01.01.2000</div>
            </div>
          </div>
          <div className="notification-with-image notification-wrapper">
            <img src={images.notifications_logo} alt={"notifications-logo3"} />
            <div className="user-info">
              <div className="username">Picstagrah</div>
              <div className="subtitle">Invoice is ready for donwload</div>
              <div className="date">01.01.2000</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationsList;
