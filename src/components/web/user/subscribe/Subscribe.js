import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import { Button } from "../../../ui-kit";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../../actions";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    // this.props.handleConfirmation(true);
  };

  handleModalAction = () => {
    this.props.handleModalHide();
    this.props.handleConfirmation(false);
  };

  render() {
    const { dataList } = this.state;
    console.log(this.props);
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

  // Tooltip List
  getTooltipUserList = userId => {
    if (userId) {
      const userRequestData = { id: userId, type: "followers" };
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

Subscribe.propTypes = {
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
  getUser: PropTypes.func,
  handleModalHide: PropTypes.func,
  handleConfirmation: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);
