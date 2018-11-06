import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";

class TopBarOtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    const items = {
      username: "User name",
      private: false,
      more: true,
      isSubscribe: true,
      slots: [
        {
          name: Translations.top_bar_info.subscriber,
          val: "10000",
          className: "col-sm-4 slot_one no-padding",
          btnActiveClassName: "filled_button",
          btnText: Translations.top_bar_info.subscribe,
          handeleEvent: this.handeleSubscribe
        },
        {
          name: Translations.top_bar_info.subscribed,
          val: "7",
          className: "col-sm-4 slot_two no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.message,
          handeleEvent: this.handeleMessage
        },
        {
          name: Translations.top_bar_info.posts,
          val: "3",
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

TopBarOtherInfo.propTypes = {
  match: propTypes.any,
  handleModalShow: propTypes.func
};

export default TopBarOtherInfo;
