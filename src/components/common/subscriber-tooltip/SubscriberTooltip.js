import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import { Auth } from "../../../auth";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../actions";

class SubscribedTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyPress = () => {};

  componentDidMount = () => {
    this.getTooltipUserList(this.props.userId);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.getTooltipUserList(nextProps.userId);
    }

    if (this.props.userDataByUsername.user) {
      if (
        this.props.userDataByUsername.user.data.subscribedCount !==
        nextProps.userDataByUsername.user.data.subscribedCount
      ) {
        this.getTooltipUserList(nextProps.userId);
      }
    }
  }

  // Tooltip List
  getTooltipUserList = userId => {
    const userRequestData = { id: userId, type: "followings" };
    this.props.getFollowUserList("subscriber", userRequestData).then(() => {
      // Success
    });
  };

  // Left sidebar - All User List
  getAllUserData = () => {
    this.props.getDashboard("users").then(() => {
      if (this.props.usersList) {
        this.setState({ usersList: this.props.usersList });
      }
    });
  };

  // Top Bar - User Info
  getUserInfo = username => {
    // const storage = Auth.extractJwtFromStorage();
    // let userInfo = null;
    // if (storage) {
    //   userInfo = JSON.parse(storage.userInfo);
    // }
    const data = { username: username };
    this.props.getUser(data).then(() => {
      if (this.props.userDataByUsername.user.data) {
        // Success
      }
    });
  };

  handleSubscribed = e => {
    const usersList = this.props.subscribeData.subscriber;
    const selectedUserList = usersList.find(user => user.id === e.target.id);
    if (selectedUserList.subscribeId === "") {
      const requestData = { followers: e.target.id };
      this.props.sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // error
        } else if (this.props.usersData.isRequestSend) {
          this.getTooltipUserList(this.props.userId);
          this.getAllUserData();
          this.getUserInfo(selectedUserList.username);
        }
      });
    } else {
      const subscribedId = selectedUserList.subscribeId;
      this.props.getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // error
        } else if (this.props.usersData.isUnsubscribed) {
          this.getTooltipUserList(this.props.userId);
          this.getAllUserData();
          this.getUserInfo(selectedUserList.username);
        }
      });
    }
  };

  render() {
    return (
      <div id="">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        <div className="header-notifications">
          {this.props.subscribeData.subscriber.length > 0 ? (
            this.props.subscribeData.subscriber.map(user => {
              return (
                <div
                  className="notification-with-subscribe notification-wrapper"
                  key={user.id}
                >
                  <img
                    src={user.profileUrl}
                    alt="campaign"
                    className="img-circle img-responsive"
                  />
                  <div className="user-info">
                    <div className="username">{user.username}</div>
                    <div className="subtitle">{user.name}</div>
                  </div>
                  <div className="subscribe-btn">
                    {user.isSubscribe ? (
                      <div className="community-subscribe">
                        <button
                          className="filled_button"
                          id={user.id}
                          onClick={this.handleSubscribed}
                        >
                          {
                            Translations.profile_community_right_sidebar
                              .Subscribed
                          }
                        </button>
                      </div>
                    ) : (
                      <div className="community-subscribe">
                        <button
                          className="blue_button"
                          id={user.id}
                          onClick={this.handleSubscribed}
                        >
                          {
                            Translations.profile_community_right_sidebar
                              .Subscribe
                          }
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="notification-with-subscribe notification-wrapper">
              <div className="user-info">
                <div className="subtitle">
                  {Translations.top_bar_info_modal.no_data}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscribeData: state.subscribeData,
  usersData: state.usersData,
  usersList: state.dashboardData.users,
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
};

SubscribedTooltip.propTypes = {
  type: PropTypes.any,
  userId: PropTypes.any,
  username: PropTypes.any,
  getFollowUserList: PropTypes.func,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  subscribeData: PropTypes.any,
  usersData: PropTypes.any,
  getUserData: PropTypes.any,
  getDashboard: PropTypes.func,
  usersList: PropTypes.any,
  userDataByUsername: PropTypes.any,
  getUser: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribedTooltip);
