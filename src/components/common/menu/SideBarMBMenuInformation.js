import React from "react";
import { MobileSidebarMenu } from "../../ui-kit";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import * as images from "../../../lib/constants/images";

const Links = [
  {
    to: routes.MB_ABOUT_US_INFORMATION_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.aboutus
  },
  {
    to: routes.LEGAL_NOTICE_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.legal_notice
  },
  {
    to: routes.SUPPORT_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.support
  },
  {
    to: routes.MB_CAMPAIGN_INFORMATION_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.campaigns
  },
  {
    to: routes.ADS_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.ads
  },
  {
    to: routes.VERIFICATION_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_information.verification
  }
];

const SideBarMBMenuInformation = () => {
  return <MobileSidebarMenu links={Links} />;
};

export default SideBarMBMenuInformation;
