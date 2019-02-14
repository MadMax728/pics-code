import React from "react";
import { LeftSidebarNav } from "../../ui-kit";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const Links = [
  // {
  //   to: routes.INFORMATION_OUR_MISSION_ROUTE,
  //   className: "secondary_title",
  //   activeClassName: "active",
  //   text: Translations.information_menu.our_vision
  // },
  {
    to: routes.INFORMATION_IMPRINT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.imprint
  },
  // {
  //   to: routes.INFORMATION_CAMPAIGN_ROUTE,
  //   className: "secondary_title",
  //   activeClassName: "active",
  //   text: Translations.information_menu.campaigns
  // },
  // {
  //   to: routes.INFORMATION_ADVERTISING_ROUTE,
  //   className: "secondary_title",
  //   activeClassName: "active",
  //   text: Translations.information_menu.advertising
  // },
  {
    to: routes.INFORMATION_DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.data_protection_and_privacy_policy
  },
  {
    to: routes.INFORMATION_COOKIE_GUIDELINES_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.cookie_guidelines
  },
  {
    to: routes.INFORMATION_GENERAL_TERMS_AND_CONDITIONS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.general_terms_and_conditions
  },
  {
    to: routes.INFORMATION_COMMUNITY_GUIDELINES_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.community_guidelines
  },
  {
    to: routes.INFORMATION_PLATFORM_POLICY_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.platform_policy
  },
  // {
  //   to: routes.INFORMATION_CANCELLATION_POLICY_ROUTE,
  //   className: "secondary_title padding",
  //   activeClassName: "active",
  //   text: Translations.information_menu.cancellation_policy
  // },
  // {
  //   to: routes.INFORMATION_TERMS_OF_USE_ROUTE,
  //   className: "secondary_title padding",
  //   activeClassName: "active",
  //   text: Translations.information_menu.terms_of_use
  // },
  {
    to: routes.INFORMATION_BRANDED_CONTENT_GUIDELINES_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.branded_content_guidelines
  },
  {
    to: routes.INFORMATION_BUSINESS_TERMS_CONDITIONS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.business_terms_condition
  },
  {
    to: routes.INFORMATION_PAYMENT_GUIDELINES_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.payment_guidelines
  },
  {
    to: routes.INFORMATION_COMMUNITY_PAYMENT_GUIDELINE_ROUTE,
    className: "secondary_title padding",
    activeClassName: "active",
    text: Translations.information_menu.community_payment_guidelines
  },
  {
    to: routes.INFORMATION_ADVERTISING_POLICY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.advertising_policy
  },
  {
    to: routes.INFORMATION_CAMPAIGN_POLICY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.information_menu.campaign_policy
  }
];

const SideBarInformation = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={Translations.information_menu.menu_title}
      ulClassName={"nav navbar-nav pull-right settings-menu"}
    />
  );
};

export default SideBarInformation;
