import React from "react";
import { LeftSidebarNav } from "../../ui-kit";
import * as routes from "../../../lib/constants/routes";
import * as enumerations from "../../../lib/constants/enumerations";
import { Translations } from "../../../lib/translations";
import { Auth } from "../../../auth";

const Rank1 = [
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
]

const Rank2 = [
  {
    to: routes.BACK_OFFICE_ROOT_ROUTE,
    className: "secondary_title",
    activeClassName: "active",
    text: Translations.back_office_menu.dashboard
  }
];

const SideBarBackOffice = () => {
  const storage = Auth.extractJwtFromStorage();
  let Links = [];
  let userInfo
  if (storage) {
    userInfo = JSON.parse(storage.userInfo);
    
    if (userInfo) { 
      if (userInfo.role === enumerations.adminRank.rank1) {
        Links = Rank1;
      }
      else if (userInfo.role === enumerations.adminRank.rank2) {
        Links = Rank2;       
      }
    }
  }
  
  return (    
    <div>
      <LeftSidebarNav
        links={Links}
        header={`Backoffice`}
        ulClassName={"nav navbar-nav pull-right settings-menu"}
      />
    </div>
  );
};

export default SideBarBackOffice;
