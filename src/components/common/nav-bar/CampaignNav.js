import React from "react";
import { LeftSidebarNav } from "../../../components/ui-kit";
import { Translations } from "../../../lib/translations";

const Links = [
  {
    to: `/campaign/company`,
    className: "menu_company secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.company
  },
  {
    to: `/campaign/creator`,
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
