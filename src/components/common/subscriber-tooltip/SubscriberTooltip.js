import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../actions";
import { Button } from "../../ui-kit";

class SubscriberTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  render() {
    const { dataList } = this.state;
    return (
      <div id="" className="subscriber-tooltip">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        <div className="header-notifications">
          {dataList.length > 0 ? (
            dataList.map(user => {
              return (
                <div
                  className="notification-with-subscribe notification-wrapper"
                  key={user._id}
                >
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src={user.followers.profileUrl}
                        alt="campaign"
                        className="img-circle img-responsive"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="user-info">
                        <div className="username">
                          {user.followers.username}
                        </div>
                        <div className="subtitle">{user.followers.name}</div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="subscribe-btn">
                        {user.isSubscribe ? (
                          <div className="community-subscribe">
                            <Button
                              className="filled_button"
                              id={user.id}
                              onClick={this.handleSubscribed}
                              text={
                                Translations.profile_community_right_sidebar
                                  .Subscribed
                              }
                            />
                          </div>
                        ) : (
                          <div className="community-subscribe">
                            <Button
                              className="blue_button"
                              id={user.id}
                              onClick={this.handleSubscribed}
                              text={
                                Translations.profile_community_right_sidebar
                                  .Subscribe
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
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

  handleKeyPress = () => {};

  // Tooltip List
  getTooltipUserList = userId => {
    if (userId) {
      const userRequestData = { id: userId, type: "following" };
      this.props.getFollowUserList("subscriber", userRequestData).then(() => {
        // Success
        if (
          this.props.subscribeData &&
          this.props.subscribeData.subscriber &&
          this.props.subscribeData.subscriber.data
        ) {
          this.setState({
            dataList: this.props.subscribeData.subscriber.data
          });
        }
      });
    }
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
    const data = { username };
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

SubscriberTooltip.propTypes = {
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
)(SubscriberTooltip);
