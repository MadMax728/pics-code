import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { notification_list } from "../../../../../mock-data";

class NotificationsList extends Component {
  render() {
    return (
      <div className="tab-pane fade active in" id="nav-notifications">
        <div className="header-notifications">
          {notification_list.map((notification, index) => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={index}
              >
                {notification.isInvoise ? (
                  <img
                    src={images.notifications_logo}
                    alt={"notifications-logo3" + index}
                  />
                ) : (
                  <img src={notification.image} alt={"index" + index} />
                )}
                <div className="user-info">
                  <div className="username">{notification.username}</div>
                  <div className="subtitle">Subscribed to your profile</div>
                  <div className="date">{notification.date}</div>
                </div>
                {notification.isSubScribe && (
                  <div className="subscribe-btn">
                    <button className="filled_button">Subscribe</button>
                  </div>
                )}
                {notification.isImage && (
                  <div className="square-image">
                    <img src={images.image} alt={"image5" + index} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NotificationsList;
