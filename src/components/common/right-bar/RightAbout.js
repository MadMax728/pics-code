import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const RightAbout = () => {
  return (
    <div className="right_small_menus">
      <span>
        <Link to={routes.ABOUTUS_ROUTE}>
          {Translations.base_footer.about_us}
        </Link>
      </span>
      <span>
        <Link to={routes.SUPPORT_ROUTE}>
          {Translations.base_footer.support}
        </Link>
      </span>
      <span>
        <Link to={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}>
          {Translations.base_footer.data_protection_and_privacy_policy}
        </Link>
      </span>
      <span>
        <Link to={routes.LEGAL_NOTICE_ROUTE}>
          {Translations.base_footer.legal_notice}
        </Link>
      </span>
      <span>
        <Link to={routes.TERMS_CONDITIONS_ROUTE}>
          {Translations.base_footer.terms_and_condition}
        </Link>
      </span>
      <span>
        <Link to={routes.NETZDG_ROUTE}>{Translations.base_footer.netzdg}</Link>
      </span>
      <span>
        <Link to={routes.COOKIES_ROUTE}>
          {Translations.base_footer.cookies}
        </Link>
      </span>
    </div>
  );
};

export default RightAbout;
