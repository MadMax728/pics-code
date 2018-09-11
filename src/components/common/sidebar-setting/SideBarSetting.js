import React from "react";
import { LeftSidebarNav } from "../../ui-kit";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const Links = [
  {
    to: routes.EDIT_PROFILE_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.edit_profile
  },
  {
    to: routes.PRIVACY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.privacy
  },
  {
    to: routes.BUSSINESS_PROFILE_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.bussiness_profile
  },
  {
    to: routes.CAMPAIGN_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.campaign
  },
  {
    to: routes.ADS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.ads
  },
  {
    to: routes.BILLS_AND_RECEIPTS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.bills_and_receipts
  },
  {
    to: routes.DATA_DOWNLOAD_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.data_download
  },
  {
    to: routes.LOGOUT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.logout
  }
];

const SideBarSetting = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Settings`}
      ulClassName={"nav navbar-nav pull-right settings-menu"}
    />
  );
};

export default SideBarSetting;
