import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getUser,
  sendRequest,
  getUnsubscribe,
  getDashboard
} from "../../../../actions";
import * as routes from "../../../../lib/constants/routes";
import { modalType } from "../../../../lib/constants";

class TopBarOtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        userid: this.props.match.userid,
        username: this.props.match.username,
        private: true,
        more: true,
        isSubscribe: true,
        isBlocked: null,
        blockId: null,
        userProfile: this.props.match.profileUrl,
        slots: [
          {
            className: "col-sm-4 slot_one  no-padding",
            name: Translations.top_bar_info.subscriber,
            val: 0,
            userid: this.props.match.userid,
            username: this.props.match.username
          },
          {
            className: "col-sm-4 slot_one no-padding",
            name: Translations.top_bar_info.subscribed,
            val: 0,
            userid: this.props.match.userid,
            username: this.props.match.username,
            isHide: true
          },
          {
            className: "col-sm-4 slot_one no-padding",
            name: Translations.top_bar_info.posts,
            val: 0,
            userid: this.props.match.userid,
            username: this.props.match.username
          }
        ],
        btnSlots: [
          {
            name: Translations.top_bar_info.subscriber,
            className: "col-sm-8 slot_one no-padding",
            btnActiveClassName: "filled_button",
            btnText: Translations.top_bar_info.subscribe,
            handeleEvent: this.handeleSubscribe,
            userid: this.props.match.userid,
            username: this.props.match.username
          },
          {
            name: Translations.top_bar_info.posts,
            className: "col-sm-4 slot_two no-padding",
            btnActiveClassName: "black_button",
            btnText: Translations.top_bar_info.message,
            handeleEvent: this.andeleMessage,
            userid: this.props.match.userid,
            username: this.props.match.username
          }
        ]
      }
    };
  }

  render() {
    return (
      <TopBar
        items={this.state.items}
        handeleShare={this.handeleShare}
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
        userDataByUsername={this.props.userDataByUsername}
      />
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getUserData();
  }

  componentWillReceiveProps(nextProps) {
    const data = this.props.match;
    if (data.username !== nextProps.match.username) {
      this.props.getUser(nextProps.match).then(() => {
        if (
          this.props.userDataByUsername &&
          this.props.userDataByUsername.user &&
          this.props.userDataByUsername.user.data
        ) {
          this.handleSetUserInfo();
        }
      });
    }
  }

  handeleShare = () => {
    const data = {
      url: `${window.location.href}`
    };
    this.props.handleModalInfoShow(modalType.share, data);
  };

  getUserData = () => {
    const data = this.props.match;
    this.props.getUser(data).then(() => {
      if (
        this.props.userDataByUsername &&
        this.props.userDataByUsername.user &&
        this.props.userDataByUsername.user.data
      ) {
        this.handleSetUserInfo();
      }
    });
  };

  getUserDataList = () => {
    this.props.getDashboard("users", "").then(() => {
      // get user list
    });
  };

  handleSetUserInfo = () => {
    const isPending = this.props.userDataByUsername.user.data.isPending;
    const isSubscribe = this.props.userDataByUsername.user.data.isSubscribe;

    let subscribeBtnClass = "filled_button";
    let subscribeBtnText = Translations.top_bar_info.subscribe;
    // if (isPending) {
    //   subscribeBtnText = Translations.top_bar_info.request_pending;
    //   subscribeBtnClass = "filled_button";
    // } else {
    subscribeBtnClass = "filled_button";
    if (isSubscribe) {
      subscribeBtnClass = "filled_button";
      subscribeBtnText = Translations.top_bar_info.subscribed;
    } else {
      subscribeBtnClass = "blue_button";
      subscribeBtnText = Translations.top_bar_info.subscribe;
    }
    // }
    const items = {
      userid: this.props.userDataByUsername.user.data._id,
      username: this.props.userDataByUsername.user.data.username,
      private: this.props.userDataByUsername.user.data.isPrivate,
      more: true,
      isSubscribe: true,
      userProfile: this.props.userDataByUsername.user.data.profileUrl,
      isBlocked: this.props.userDataByUsername.user.data.isBlocked,
      blockId: this.props.userDataByUsername.user.data.blockId,
      slots: [
        {
          className: "col-sm-4 slot_one no-padding",
          name: Translations.top_bar_info.subscriber,
          val: this.props.userDataByUsername.user.data.subscribersCount,
          userid: this.props.userDataByUsername.user.data._id,
          username: this.props.userDataByUsername.user.data.username
        },
        {
          className: "col-sm-4 slot_one no-padding",
          name: Translations.top_bar_info.subscribed,
          val: this.props.userDataByUsername.user.data.subscribedCount,
          userid: this.props.userDataByUsername.user.data._id,
          username: this.props.userDataByUsername.user.data.username
        },
        {
          className: "col-sm-4 slot_one no-padding",
          name: Translations.top_bar_info.posts,
          val: this.props.userDataByUsername.user.data.postCount,
          userid: this.props.userDataByUsername.user.data._id,
          username: this.props.userDataByUsername.user.data.username
        }
      ],
      btnSlots: [
        {
          name: Translations.top_bar_info.subscriber,
          className: "col-sm-8 slot_one no-padding",
          btnActiveClassName: subscribeBtnClass,
          btnText: subscribeBtnText,
          handeleEvent: this.handeleSubscribe,
          userid: this.props.userDataByUsername.user.data._id,
          username: this.props.userDataByUsername.user.data.username
        },
        {
          name: Translations.top_bar_info.posts,
          className: "col-sm-4 slot_two no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.message,
          handeleEvent: this.handeleMessage,
          userid: this.props.userDataByUsername.user.data._id,
          username: this.props.userDataByUsername.user.data.username
        }
      ]
    };
    this.setState({ items });
  };

  handeleSubscribe = () => {
    // To Do - Integration changed - according to backend API response
    const errors = {};
    const selectedUserList = this.props.userDataByUsername.user.data;
    // if (selectedUserList.isPending) {
    //   // To Do - On Pending request click
    // } else
    if (selectedUserList.isSubscribe === false) {
      const requestData = { followers: selectedUserList.id };
      this.props.sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isRequestSendData) {
          this.getUserData();
          this.getUserDataList();
        }
      });
    } else {
      const subscribedId = selectedUserList.subscribeId;
      this.props.getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isUnsubscribedData) {
          this.getUserData();
          this.getUserDataList();
        }
      });
    }
  };

  handeleMessage = () => {
    console.log('this.props.userDataByUsername.user.data._id ', this.props.userDataByUsername.user.data._id);
    const username = this.props.userDataByUsername.user.data.username;
    this.props.history.push(`${routes.MESSAGES_ROUTE}?new=${username}`);
  };
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername,
  usersData: state.usersData
});

const mapDispatchToProps = {
  getUser,
  sendRequest,
  getUnsubscribe,
  getDashboard
};

TopBarOtherInfo.propTypes = {
  match: PropTypes.any,
  handleModalShow: PropTypes.func,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  handleModalInfoShow: PropTypes.any,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any,
  getDashboard: PropTypes.func,
  history: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarOtherInfo);
