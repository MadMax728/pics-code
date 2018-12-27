import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";
import { connect } from "react-redux";
import { getUser, sendRequest, getUnsubscribe } from "../../../../actions";
class TopBarOtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        username: this.props.match.username,
        private: true,
        more: true,
        isSubscribe: true,
        userProfile: this.props.match.profileUrl,
        slots: [
          {
            name: Translations.top_bar_info.subscriber,
            val: 0,
            className: "col-sm-4 slot_one no-padding",
            btnActiveClassName: "filled_button",
            btnText: Translations.top_bar_info.subscribe,
            handeleEvent: this.handeleSubscribe
          },
          {
            name: Translations.top_bar_info.subscribed,
            val: 0,
            className: "col-sm-4 slot_two no-padding",
            btnActiveClassName: "black_button",
            btnText: Translations.top_bar_info.message,
            handeleEvent: this.handeleMessage
          },
          {
            name: Translations.top_bar_info.posts,
            val: 0,
            className: "col-sm-4 slot_three no-padding",
            btnActiveClassName: "black_button",
            btnText: Translations.top_bar_info.like_you,
            handeleEvent: this.handeleLikeYou
          }
        ]
      }
    };
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

  componentDidMount() {
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
  }

  handleSetUserInfo = () => {
    const items = {
      username: this.props.userDataByUsername.user.data.username,
      private: this.props.userDataByUsername.user.data.isPrivate,
      more: true,
      isSubscribe: true,
      userProfile: this.props.userDataByUsername.user.data.profileUrl,
      slots: [
        {
          name: Translations.top_bar_info.subscriber,
          val: this.props.userDataByUsername.user.data.subscribersCount,
          className: "col-sm-4 slot_one no-padding",
          btnActiveClassName: "filled_button",
          btnText: Translations.top_bar_info.subscribe,
          handeleEvent: this.handeleSubscribe
        },
        {
          name: Translations.top_bar_info.subscribed,
          val: this.props.userDataByUsername.user.data.subscribedCount,
          className: "col-sm-4 slot_two no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.message,
          handeleEvent: this.handeleMessage
        },
        {
          name: Translations.top_bar_info.posts,
          val: this.props.userDataByUsername.user.data.postCount,
          className: "col-sm-4 slot_three no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.like_you,
          handeleEvent: this.handeleLikeYou
        }
      ]
    };
    this.setState({ items });
  };

  handeleSubscribe = () => {
    // To Do - Integration changed - according to backend API response
    console.log("handeleSubscribe clicked");
    const errors = {};
    const selectedUserList = this.props.userDataByUsername.user.data;
    if (selectedUserList.subscribeId === "") {
      const requestData = { followers: selectedUserList.id };
      this.props.sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isRequestSend) {
          this.handleSetUserInfo();
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
        } else if (this.props.usersData.isUnsubscribed) {
          this.handleSetUserInfo();
        }
      });
    }
  };

  handeleMessage = () => {
    this.props.handleModalShow(modalType.messages);
  };

  handeleLikeYou = () => {
    console.log("handeleLikeYou clicked");
  };

  render() {
    return (
      <TopBar
        items={this.state.items}
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
      />
    );
  }
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername,
  usersData: state.usersData
});

const mapDispatchToProps = {
  getUser,
  sendRequest,
  getUnsubscribe
};

TopBarOtherInfo.propTypes = {
  match: PropTypes.any,
  handleModalShow: PropTypes.func,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  handleModalInfoShow: PropTypes.any,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarOtherInfo);
