import React from "react";
import { LeftSidebarNav } from "../../../components/ui-kit";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const Links = [
  {
    to: routes.COMPANY_ROUTE,
    className: "menu_company secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.company
  },
  {
    to: routes.CREATOR_ROUTE,
    className: "menu_creator secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.creator
  }
];

const CampaignNav = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Menu`}
      ulClassName={"nav navbar-nav pull-right"}
    />
  );
};

export default CampaignNav;
