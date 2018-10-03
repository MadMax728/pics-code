import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.SERVICE_SUPPORT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.support
  },
  {
    to: routes.SERVICE_VERIFICATION_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.verification
  },
  {
    to: routes.SERVICE_FEEDBACK_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.feedback
  },
  {
    to: routes.SERVICE_REPORTED_CONTENT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.reported_content
  },
  {
    to: routes.SERVICE_DELETE_ACCOUNT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.delete_account
  },
  {
    to: routes.SERVICE_LAW_ENFORCEMENT_AGENCY_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.service_menu.law_enforcement_agency
  }
];

const SideBarService = () => {
  return (
    <div>
      <div className="gap-10" />
      <LeftSidebarNav
        links={Links}
        header={`Service`}
        ulClassName={"nav navbar-nav pull-right settings-menu"}
      />
    </div>
  );
};

export default SideBarService;
