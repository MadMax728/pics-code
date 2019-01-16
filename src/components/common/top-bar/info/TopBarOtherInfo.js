import React, { Component } from "react";
import { TopBar, Loader } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";
import { connect } from "react-redux";
import {
  getUser,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  like
} from "../../../../actions";
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
            name: Translations.top_bar_info.subscriber,
            val: 0,
            className: "col-sm-4 slot_one no-padding",
            btnActiveClassName: "filled_button",
            btnText: Translations.top_bar_info.subscribe,
            handeleEvent: this.handeleSubscribe,
            userid: this.props.match.userid,
            username: this.props.match.username
          },
          {
            name: Translations.top_bar_info.subscribed,
            val: 0,
            className: "col-sm-4 slot_two no-padding",
            btnActiveClassName: "black_button",
            btnText: Translations.top_bar_info.message,
            handeleEvent: this.handeleMessage,
            userid: this.props.match.userid,
            username: this.props.match.username
          },
          {
            name: Translations.top_bar_info.posts,
            val: 0,
            className: "col-sm-4 slot_three no-padding",
            btnActiveClassName: "black_button",
            btnText: Translations.top_bar_info.like_you,
            handeleEvent: this.handeleLikeYou,
            userid: this.props.match.userid,
            username: this.props.match.username
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
    window.scrollTo(0, 0);
    this.getUserData();
  }

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

  handleSetUserInfo = () => {
    const isPending = this.props.userDataByUsername.user.data.isPending;
    const isSubscribe = this.props.userDataByUsername.user.data.isSubscribe;
    const isLike = this.props.userDataByUsername.user.data.isLike;

    let subscribeBtnClass = "filled_button";
    let subscribeBtnText = Translations.top_bar_info.subscribe;
    if (isPending) {
      subscribeBtnText = Translations.top_bar_info.request_pending;
    } else {
      subscribeBtnClass = "filled_button";
      if (isSubscribe) {
        subscribeBtnClass = "filled_button";
        subscribeBtnText = Translations.top_bar_info.subscribed;
      } else {
        subscribeBtnClass = "blue_button";
        subscribeBtnText = Translations.top_bar_info.subscribe;
      }
    }

    let isLikeBtnClass = "black_button";
    if (isLike) {
      isLikeBtnClass = "filled_button";
    } else {
      isLikeBtnClass = "black_button";
    }

    const items = {
      userid: this.props.userDataByUsername.user.data.id,
      username: this.props.userDataByUsername.user.data.username,
      private: this.props.userDataByUsername.user.data.isPrivate,
      more: true,
      isSubscribe: true,
      userProfile: this.props.userDataByUsername.user.data.profileUrl,
      isBlocked: this.props.userDataByUsername.user.data.isBlocked,
      blockId: this.props.userDataByUsername.user.data.blockId,
      slots: [
        {
          name: Translations.top_bar_info.subscriber,
          val: this.props.userDataByUsername.user.data.subscribersCount,
          className: "col-sm-4 slot_one no-padding",
          btnActiveClassName: subscribeBtnClass,
          btnText: subscribeBtnText,
          handeleEvent: this.handeleSubscribe,
          userid: this.props.userDataByUsername.user.data.id,
          username: this.props.userDataByUsername.user.data.usernam
        },
        {
          name: Translations.top_bar_info.subscribed,
          val: this.props.userDataByUsername.user.data.subscribedCount,
          className: "col-sm-4 slot_two no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.message,
          handeleEvent: this.handeleMessage,
          userid: this.props.userDataByUsername.user.data.id,
          username: this.props.userDataByUsername.user.data.username
        },
        {
          name: Translations.top_bar_info.posts,
          val: this.props.userDataByUsername.user.data.postCount,
          className: "col-sm-4 slot_three no-padding",
          btnActiveClassName: isLikeBtnClass,
          btnText: Translations.top_bar_info.like_you,
          handeleEvent: this.handeleLikeYou,
          userid: this.props.userDataByUsername.user.data.id,
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
    if (selectedUserList.isPending) {
      // To Do - On Pending request click
    } else if (selectedUserList.isSubscribe === false) {
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
          this.getUserData();
          this.props.getDashboard("users");
        }
      });
    } else if (selectedUserList.isSubscribe === true) {
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
          this.getUserData();
          this.props.getDashboard("users");
        }
      });
    }
  };

  handeleMessage = () => {
    this.props.handleModalShow(modalType.messages);
  };

  handeleLikeYou = event => {
    const likeParam = { typeId: event.target.id };
    this.props.like(likeParam);
    const username = this.props.userDataByUsername.user.data.username;
    if (username) {
      const data = {
        username
      };
      this.getUserData(data);
    }
  };

  render() {
    return (
      <TopBar
        items={this.state.items}
        handleModalShow={this.props.handleModalShow}
        handleModalInfoShow={this.props.handleModalInfoShow}
        userDataByUsername={this.props.userDataByUsername}
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
  getUnsubscribe,
  getDashboard,
  like
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
  like: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarOtherInfo);
