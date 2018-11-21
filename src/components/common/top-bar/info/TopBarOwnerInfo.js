import React, { Component } from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";
import { modalType } from "../../../../lib/constants/enumerations";

class TopBarOwnerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
    // console.log("handle share");
    this.props.handleModalInfoShow(modalType.share);
  };

  componentWillMount() {
    const items = {
      username: "User name",
      private: false,
      settings: true,
      more: false,
      slots: [
        {
          name: Translations.top_bar_info.subscriber,
          val: "10000",
          className: "col-sm-4 slot_one no-padding",
          btnActiveClassName: "filled_button",
          btnText: Translations.top_bar_info.upload,
          handeleEvent: this.handeleUpload
        },
        {
          name: Translations.top_bar_info.subscribed,
          val: "7",
          className: "col-sm-4 slot_two no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.create_campaign,
          handeleEvent: this.handeleCreateCampaign
        },
        {
          name: Translations.top_bar_info.posts,
          val: "3",
          className: "col-sm-4 slot_three no-padding",
          btnActiveClassName: "black_button",
          btnText: Translations.top_bar_info.create_ad,
          handeleEvent: this.handeleCreateAd
        }
      ]
    };
    this.setState({ items });
  }

  render() {
    return <TopBar items={this.state.items} handeleShare={this.handeleShare} />;
  }
}

TopBarOwnerInfo.propTypes = {
  handleModalShow: propTypes.func,
  handleModalInfoShow: propTypes.func
};

export default TopBarOwnerInfo;
