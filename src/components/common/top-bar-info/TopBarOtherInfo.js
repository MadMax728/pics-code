import React from "react";
import { TopBar } from "../../ui-kit";
import { Translations } from "../../../lib/translations";

const handeleSubscribe = () => {
  console.log("handeleSubscribe clicked");
};

const handeleMessage = () => {
  console.log("handeleMessage clicked");
};

const handeleLikeYou = () => {
  console.log("handeleLikeYou clicked");
};

const Items = {
  username: "User name",
  private: false,
  more: true,
  slots: [
    {
      name: Translations.top_bar_info.subscriber,
      val: "10000",
      className: "col-sm-4 slot_one no-padding",
      btnActiveClassName: "filled_button",
      btnText: Translations.top_bar_info.subscribe,
      handeleEvent: handeleSubscribe
    },
    {
      name: Translations.top_bar_info.subscribed,
      val: "7",
      className: "col-sm-4 slot_two no-padding",
      btnActiveClassName: "black_button",
      btnText: Translations.top_bar_info.message,
      handeleEvent: handeleMessage
    },
    {
      name: Translations.top_bar_info.posts,
      val: "3",
      className: "col-sm-4 slot_three no-padding",
      btnActiveClassName: "black_button",
      btnText: Translations.top_bar_info.like_you,
      handeleEvent: handeleLikeYou
    }
  ]
};

const TopBarOtherInfo = () => {
  return <TopBar items={Items} />;
};

export default TopBarOtherInfo;
