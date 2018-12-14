import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import PropTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";
import { connect } from "react-redux";
import { getUser } from "../../../../actions";
class TopBarOtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
    console.log(this.props.match);
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
  }

  handeleSubscribe = () => {
    console.log("handeleSubscribe clicked");
    // call subscribe api
  };

  handeleMessage = () => {
    this.props.handleModalShow(modalType.messages);
  };

  handeleLikeYou = () => {
    console.log("handeleLikeYou clicked");
  };

  render() {
    return <TopBar items={this.state.items} />;
  }
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getUser
};

TopBarOtherInfo.propTypes = {
  match: PropTypes.any,
  handleModalShow: PropTypes.func,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarOtherInfo);
