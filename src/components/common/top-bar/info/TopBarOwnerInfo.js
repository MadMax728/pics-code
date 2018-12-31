import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";
import { Auth } from "../../../../auth";
import { connect } from "react-redux";
import { getUser, getFollowUserList } from "../../../../actions";
import { SubscribeToolTips } from "../../../common";

const storage = Auth.extractJwtFromStorage();
class TopBarOwnerInfo extends Component {
  constructor(props) {
    super(props);

    let userInfo = {};
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    this.state = {
      items: null
    };
  }

  handeleUpload = () => {
    this.props.handleModalShow(modalType.upload);
  };

  handeleCreateCampaign = () => {
    this.props.handleModalShow(modalType.campaign);
  };

  handeleCreateAd = () => {
    this.props.handleModalShow(modalType.ads);
  };

  handelePayment = () => {
    this.props.handleModalShow(modalType.payment);
  };

  handeleShare = () => {
    this.props.handleModalInfoShow(modalType.share);
  };

  componentDidMount() {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }

    if (userInfo) {
      const data = {
        username: userInfo.username
      };
      this.setState({ isLoading: true });
      this.props.getUser(data).then(() => {
        if (
          this.props.userDataByUsername &&
          this.props.userDataByUsername.user &&
          this.props.userDataByUsername.user.data
        ) {
          const items = {
            userid: this.props.userDataByUsername.user.data.id,
            username: this.props.userDataByUsername.user.data.username,
            private: this.props.userDataByUsername.user.data.isPrivate,
            settings: true,
            more: false,
            userProfile: this.props.userDataByUsername.user.data.profileUrl,
            slots: [
              {
                name: Translations.top_bar_info.subscriber,
                val: this.props.userDataByUsername.user.data.subscribersCount,
                className: "col-sm-4 slot_one no-padding",
                btnActiveClassName: "filled_button",
                btnText: Translations.top_bar_info.upload,
                handeleEvent: this.handeleUpload,
                list: this.handleSubscriberCountTooltip
              },
              {
                name: Translations.top_bar_info.subscribed,
                val: this.props.userDataByUsername.user.data.subscribedCount,
                className: "col-sm-4 slot_two no-padding",
                btnActiveClassName: "black_button",
                btnText: Translations.top_bar_info.create_campaign,
                handeleEvent: this.handeleCreateCampaign,
                list: this.handleSubscribedCountTooltip
              },
              {
                name: Translations.top_bar_info.posts,
                val: this.props.userDataByUsername.user.data.postCount,
                className: "col-sm-4 slot_three no-padding",
                btnActiveClassName: "black_button",
                btnText: Translations.top_bar_info.create_ad,
                handeleEvent: this.handeleCreateAd,
              }
            ]
          };
          this.setState({ items });
        }
      });
    }
  }

  render() {
    return (
      <TopBar
        items={this.state.items}
        handeleShare={this.handeleShare}
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
  getFollowUserList
};

TopBarOwnerInfo.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object,
  getFollowUserList: PropTypes.func,
  usersData: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarOwnerInfo);
