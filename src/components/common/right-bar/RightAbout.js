import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const RightAbout = () => {
  return (
    <div className="right_small_menus">
    <ul>
      <li>
        <Link to={routes.ABOUTUS_ROUTE}>
          {Translations.base_footer.about_us}
        </Link>
      </li>
      <li>
        <Link to={routes.SUPPORT_ROUTE}>
          {Translations.base_footer.support}
        </Link>
      </li>
      <li>
        <Link to={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}>
          {Translations.base_footer.data_protection_and_privacy_policy}
        </Link>
      </li>
      <li>
        <Link to={routes.LEGAL_NOTICE_ROUTE}>
          {Translations.base_footer.legal_notice}
        </Link>
      </li>
      <li>
        <Link to={routes.TERMS_CONDITIONS_ROUTE}>
          {Translations.base_footer.terms_and_condition}
        </Link>
      </li>
      <li>
        <Link to={routes.NETZDG_ROUTE}>{Translations.base_footer.netzdg}</Link>
      </li>
      <li>
        <Link to={routes.COOKIES_ROUTE}>
          {Translations.base_footer.cookies}
        </Link>
      </li>
      </ul>
    </div>
  );
};

export default RightAbout;
