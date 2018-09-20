import React from "react";
import { TopBar } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";

const handeleUpload = () => {
  console.log("handeleUpload clicked");
};

const handeleCreateCampaign = () => {
  console.log("handeleCreateCampaign clicked");
};

const handeleCreateAd = () => {
  console.log("handeleCreateAd clicked");
};

const Items = {
  username: "User name",
  private: false,
  settings: true,
  slots: [
    {
      name: Translations.top_bar_info.subscriber,
      val: "10000",
      className: "col-sm-4 slot_one no-padding",
      btnActiveClassName: "filled_button",
      btnText: Translations.top_bar_info.upload,
      handeleEvent: handeleUpload
    },
    {
      name: Translations.top_bar_info.subscribed,
      val: "7",
      className: "col-sm-4 slot_two no-padding",
      btnActiveClassName: "black_button",
      btnText: Translations.top_bar_info.create_campaign,
      handeleEvent: handeleCreateCampaign
    },
    {
      name: Translations.top_bar_info.posts,
      val: "3",
      className: "col-sm-4 slot_three no-padding",
      btnActiveClassName: "black_button",
      btnText: Translations.top_bar_info.create_ad,
      handeleEvent: handeleCreateAd
    }
  ]
};

const TopBarOwnerInfo = () => {
  return <TopBar items={Items} />;
};

export default TopBarOwnerInfo;
