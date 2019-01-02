import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe
} from "../../../actions";

class SubscriberTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyPress = () => {};

  componentDidMount = () => {
    this.getUserList(this.props.userId);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.getUserList(nextProps.userId);
    }
  }

  getUserList = userId => {
    const userRequestData = { id: userId, type: "followings" };
    this.props.getFollowUserList("subscriber", userRequestData).then(() => {
      // Success
    });
  };

  handleSubscribed = e => {
    const usersList = this.props.subscribeData.subscribed;
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
          this.getUserList(this.props.userId);
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
          this.getUserList(this.props.userId);
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
          {this.props.subscribeData.subscriber.map(user => {
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
                        {Translations.profile_community_right_sidebar.Subscribe}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscribeData: state.subscribeData,
  usersData: state.usersData
});

const mapDispatchToProps = {
  getFollowUserList,
  sendRequest,
  getUnsubscribe
};

SubscriberTooltip.propTypes = {
  type: PropTypes.any,
  userId: PropTypes.any,
  getFollowUserList: PropTypes.func,
  subscribeData: PropTypes.any,
  usersData: PropTypes.any,
  sendRequest: PropTypes.any,
  getUnsubscribe: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriberTooltip);
