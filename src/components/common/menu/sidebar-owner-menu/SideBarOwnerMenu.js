import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.NEWS_FEED_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_owner_menu.news_feed
  },
  {
    to: routes.ABOUT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_owner_menu.about
  },
  {
    to: routes.SAVED_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar_owner_menu.saved
  }
];

const SideBarOwnerMenu = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Menu`}
      ulClassName={"nav navbar-nav pull-right"}
    />
  );
};

export default SideBarOwnerMenu;
