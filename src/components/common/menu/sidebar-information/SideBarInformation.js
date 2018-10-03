import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.INFORMATION_OUR_MISSION_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.our_vision
  },
  {
    to: routes.INFORMATION_IMPRINT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.imprint
  },
  {
    to: routes.INFORMATION_CAMPAIGN_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.campaigns
  },
  {
    to: routes.INFORMATION_CAMPAIGN_POLICY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.campaign_policy
  },
  {
    to: routes.INFORMATION_ADVERTISING_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.advertising
  },
  {
    to: routes.INFORMATION_ADVERTISING_POLICY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.advertising_policy
  },
  {
    to: routes.INFORMATION_GENERAL_TERMS_AND_CONDITIONS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.general_terms_and_conditions
  },
  {
    to: routes.INFORMATION_DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.data_protection_and_privacy_policy
  },
  {
    to: routes.INFORMATION_PLATFORM_POLICY_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.platform_policy
  },
  {
    to: routes.INFORMATION_CANCELLATION_POLICY_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.cancellation_policy
  },
  {
    to: routes.INFORMATION_TERMS_OF_USE_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.terms_of_use
  }
];

const SideBarInformation = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Information`}
      ulClassName={"nav navbar-nav pull-right settings-menu"}
    />
  );
};

export default SideBarInformation;
