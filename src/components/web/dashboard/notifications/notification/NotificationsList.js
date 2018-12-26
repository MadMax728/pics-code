import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { notification_list } from "../../../../../mock-data";
import { Translations } from "../../../../../lib/translations";

class NotificationsList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notification_list
    };
  }

  handleSubscribed = e => {
    const notification_list = this.state.notification_list;
    notification_list.filter(
      noti =>
        noti.id === parseInt(e.target.id) &&
        (noti.user.subscribed = !noti.user.subscribed)
    );
    this.setState({ notification_list });
  };

  render() {
    return (
      <div className="tab-pane fade active in" id="nav-notifications">
        <div className="header-notifications">
          {notification_list.map((notification) => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={notification.id}
              >
                {notification.isInvoise ? (
                  <img
                    src={images.notifications_logo}
                    alt={"notifications-logo3" + notification.id}
                  />
                ) : (
                  <img src={notification.image} alt={"notification.id" + notification.id} />
                )}
                <div className="user-info">
                  <div className="username">{notification.username}</div>
                  <div className="subtitle">
                    {Translations.notification.subscribed_to_your_profile}
                  </div>
                  <div className="date">{notification.date}</div>
                </div>
                {notification.isSubScribe &&
                  (notification.user.subscribed ? (
                    <div className="subscribe-btn">
                      <button
                        className="filled_button"
                        id={notification.id}
                        onClick={this.handleSubscribed}
                      >
                        {Translations.subscribe}
                      </button>
                    </div>
                  ) : (
                    <div className="subscribe-btn">
                      <button
                        className="blue_button"
                        id={notification.id}
                        onClick={this.handleSubscribed}
                      >
                        {Translations.subscribed}
                      </button>
                    </div>
                  ))}
                {notification.isImage && (
                  <div className="square-image">
                    <img src={images.image} alt={"image5" + notification.id} />
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
