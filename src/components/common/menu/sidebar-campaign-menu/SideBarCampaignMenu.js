import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.CAMPAIGN_INFORMATION_ROUTE,
    className: "menu_information secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.information
  },
  {
    to: routes.CAMPAIGN_PARTICIPANT_ROUTE,
    className: "menu_participants secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.participants
  }
];

const SideBarCampaignMenu = () => {
  return (
    <div>
      <LeftSidebarNav
        links={Links}
        header={`Menu`}
        ulClassName={"nav navbar-nav pull-right"}
      />
    </div>
  );
};

export default SideBarCampaignMenu;
