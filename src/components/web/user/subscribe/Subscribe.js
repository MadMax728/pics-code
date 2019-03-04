import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import { Button, InlineLoading } from "../../../ui-kit";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../../actions";
import SubscribeUserCard from "./SubscribeUserCard";

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
    const { isFor } = this.props;
    const isLoading = this.props.subscribeData.isLoading;
    return (
      <div id="" className="subscriber-tooltip">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        
        <div className="header-notifications">
        {isLoading && <InlineLoading />}
          {dataList.length > 0 ? (
            dataList.map(user => {
              return (
                <div key={user._id}>
                  <SubscribeUserCard
                    item={user}
                    isLoading={isLoading}
                    isFor={isFor}
                  />
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
      let userRequestData = { id: userId, type: "following" };
      if (this.props.isFor === "Subscribers") {
        userRequestData = { id: userId, type: "following" };
      } else if (this.props.isFor === "Subscribed") {
        userRequestData = { id: userId, type: "followers" };
      }
      this.props.getFollowUserList(userRequestData).then(() => {
        // Success
        if (
          this.props.subscribeData &&
          this.props.subscribeData.subscribeData &&
          this.props.subscribeData.subscribeData.data
        ) {
          this.setState({
            dataList: this.props.subscribeData.subscribeData.data
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
  handleConfirmation: PropTypes.func,
  isFor: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);
