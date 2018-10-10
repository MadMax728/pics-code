import React from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

const Links = [
  {
    to: routes.BACK_OFFICE_ROOT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.dashboard
  },
  {
    to: routes.BACK_OFFICE_CMS_MANAGMENT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.cms_managment
  },
  {
    to: routes.BACK_OFFICE_ADD_ADMIN_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.add_admin
  },
  {
    to: routes.BACK_OFFICE_ADD_VERIFICATION_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.add_verification
  },
  {
    to: routes.BACK_OFFICE_ADD_VOUCHER_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.add_voucher
  },
  {
    to: routes.BACK_OFFICE_DATA_DOWNLOAD_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.data_download
  }
];

const SideBarBackOffice = () => {
  return (
    <div>
      <div className="gap-10" />
      <LeftSidebarNav
        links={Links}
        header={`Settings`}
        ulClassName={"nav navbar-nav pull-right settings-menu"}
      />
    </div>
  );
};

export default SideBarBackOffice;
