import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.SETTINGS_EDIT_PROFILE_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.edit_profile
  },
  {
    to: routes.SETTINGS_PRIVACY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.privacy
  },
  {
    to: routes.SETTINGS_BUSSINESS_PROFILE_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.bussiness_profile
  },
  {
    to: routes.SETTINGS_CAMPAIGN_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.campaign
  },
  {
    to: routes.SETTINGS_ADS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.ads
  },
  {
    to: routes.SETTINGS_BILLS_AND_RECEIPTS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.bills_and_receipts
  },
  {
    to: routes.SETTINGS_DATA_DOWNLOAD_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.data_download
  },
  {
    to: routes.LOGOUT_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.left_sidebar_settings.logout
  }
];

const SideBarSettingBackOffice = () => {
  return (
    <div>
      <div className="gap-10" />
      <LeftSidebarNav
        links={Links}
        header={`Settings`}
        ulClassName={"nav navbar-nav pull-right settings-menu"}
      />
    </div>
  );
};

export default SideBarSettingBackOffice;
