import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { Translations } from "../../../../../lib/translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNotification } from "../../../../../actions";
import { DateFormat } from "../../../../Factory";
import { Button } from "../../../../ui-kit";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
class NotificationsList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      notificationList: null
    };
  }

  render() {
    const { notificationList } = this.state;
    return (
      <div className="tab-pane fade active in" id="nav-notifications">
        <div className="header-notifications">
          {notificationList && notificationList.length > 0 ? (
            notificationList.map(notification => {
              return (
                <div
                  className="notification-with-subscribe abc notification-wrapper"
                  key={notification.id}
                  role="button"
                  onKeyDown={this.keyDown}
                  tabIndex="0"
                  onClick={this.handleRedirection}
                  id={notification.id}
                >
                  <div className="notification-profile-img">
                    <img
                      src={notification.profileImage}
                      alt={"notification.id" + notification.id}
                      id={notification.id}
                    />
                  </div>
                  <div className="user-info" id={notification.id}>
                    <div className="username" id={notification.id}>
                      {notification.username}
                    </div>
                    <div className="subtitle" id={notification.id}>
                      {notification.message}
                    </div>
                    <div className="date" id={notification.id}>
                      {DateFormat(
                        notification.createdAt,
                        Translations.date_format.date,
                        true
                      )}
                    </div>
                  </div>
                  {notification.isSubScribe &&
                    (notification.user.subscribed ? (
                      <div className="subscribe-btn">
                        <Button
                          className="filled_button"
                          id={notification.id}
                          onClick={this.handleSubscribed}
                          text={Translations.subscribe}
                        />
                      </div>
                    ) : (
                      <div className="subscribe-btn">
                        <Button
                          className="blue_button"
                          id={notification.id}
                          onClick={this.handleSubscribed}
                          text={Translations.subscribed}
                        />
                      </div>
                    ))}
                  {notification.isImage && (
                    <div className="square-image">
                      <img
                        src={images.image}
                        alt={"image5" + notification.id}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="notification-with-subscribe notification-wrapper">
              <div className="user-info">
                <div className="subtitle">
                  {Translations.notification.no_request_avail}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.getNotificationList();
  };

  getNotificationList = () => {
    this.props.getNotification().then(() => {
      const { notificationData } = this.props;
      if (notificationData && notificationData.notification) {
        this.setState({ notificationList: notificationData.notification });
      }
    });
  };

  handleRedirection = e => {
    this.props.handleToggle();
    if (e.target.id) {
      const selectedNotification = this.state.notificationList.find(
        notificationRow => notificationRow.id === e.target.id
      );
      let redirectUrl = "/news-feed/";
      if (
        selectedNotification &&
        selectedNotification.typeOfContent &&
        selectedNotification.typeOfContent === "Campaign"
      ) {
        redirectUrl = `${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${
          selectedNotification.userType
        }${"/"}${selectedNotification.typeId}`;
      } else {
        redirectUrl = `/news-feed/${selectedNotification.username}`;
      }
      this.props.history.push(redirectUrl);
    }
  };

  handleSubscribed = e => {
    //   const notificationList = this.state.notificationList;
    //   notificationList.filter(
    //     noti =>
    //       noti.id === parseInt(e.target.id) &&
    //       (noti.user.subscribed = !noti.user.subscribed)
    //   );
    //   this.setState({ notificationList });
  };
}

const mapStateToProps = state => ({
  notificationData: state.notificationData
});

const mapDispatchToProps = {
  getNotification
};

NotificationsList.propTypes = {
  getNotification: PropTypes.func,
  notificationData: PropTypes.any,
  history: PropTypes.any,
  handleToggle: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsList);
