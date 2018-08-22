import React from "react";
import { LeftSidebarNav } from "../../ui-kit";
import * as routes from "../../../constants/routes";
import { Translations } from "../../translations";

const Links = [
  {
    to: routes.NEWS_ROUTE,
    className: "menu_news secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.news
  },
  {
    to: routes.EXPLORE_ROUTE,
    className: "menu_explore secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.explore
  },
  {
    to: routes.PARTICIPANTS_ROUTE,
    className: "menu_participants secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.participants
  },
  {
    to: routes.USER_ROUTE,
    className: "menu_user secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.user
  },
  {
    to: routes.PICS_ROUTE,
    className: "menu_pics secondary_title",
    activeClassName: "active",
    text: Translations.left_sidebar.pics
  }
];

const DashboardNav = () => {
  return <LeftSidebarNav links={Links} header={`Menu`} />;
};

export default DashboardNav;
