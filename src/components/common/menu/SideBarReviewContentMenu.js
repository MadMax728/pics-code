import React from "react";
import { LeftSidebarNav } from "../../ui-kit";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const Links = [
  {
    to: routes.BACK_OFFICE_REPORTED_IMAGES_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.images
  },
  {
    to: routes.BACK_OFFICE_REPORTED_VIDEOS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.videos
  },
  {
    to: routes.BACK_OFFICE_REPORTED_CAMPAIGNS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.campaigns
  },
  {
    to: routes.BACK_OFFICE_REPORTED_PICS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.pics
  },
  {
    to: routes.BACK_OFFICE_REPORTED_ADS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.ads
  },
  {
    to: routes.BACK_OFFICE_REPORTED_COMMENTS_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.comments
  },
  {
    to: routes.BACK_OFFICE_REPORTED_USER_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.review_content_menu.user
  }
];

const SideBarReviewContentMenu = () => {
  return (
    <LeftSidebarNav
      links={Links}
      header={`Review`}
      ulClassName={"nav navbar-nav pull-right settings-menu"}
    />
  );
};

export default SideBarReviewContentMenu;
