import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.BACK_OFFICE_CAMPAIGNS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_menu.campaigns
  },
  {
    to: routes.BACK_OFFICE_ADS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_menu.ads
  }
];

const SideBarReviewMenu = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Review`}
      ulClassName={"nav navbar-nav pull-right settings-menu width-100"}
    />
  );
};

export default SideBarReviewMenu;
