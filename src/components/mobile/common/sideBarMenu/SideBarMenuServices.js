import React from "react";
import { MobileSidebarMenu } from "../../../ui-kit";
import * as routes from "../../../../constants/routes";
import { Translations } from "../../../translations";
import * as images from "../../../../constants/images";

const Links = [
  {
    to: routes.TERMS_CONDITIONS_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.terms_conditions
  },

  {
    to: routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text:
      Translations.mobile_sidebar_services.data_protection_and_privacy_policy
  },

  {
    to: routes.TEARMS_USE_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.terms_use
  },

  {
    to: routes.PLATFORM_POLICY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.paltform_policy
  },

  {
    to: routes.ADVERTISING_POLICY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.advertising_policy
  },

  {
    to: routes.CAMPAIGN_POLICY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.campaign_policy
  },

  {
    to: routes.NETZDG_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.netzDg
  },

  {
    to: routes.REPORTED_CONTENT_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.reported_content
  },

  {
    to: routes.PAYMENT_METHOD_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.payment_method
  },

  {
    to: routes.CANCELLATION_POLICY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.cancellation_policy
  },

  {
    to: routes.DATA_DOWNLOAD_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.data_download
  },

  {
    to: routes.DELETE_ACCOUNT_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.delete_account
  },

  {
    to: routes.LAW_ENFORCEMENT_AGENCY_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.law_enforcement_agency
  },

  {
    to: routes.REPORT_PROBLEM_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.report_problem
  },

  {
    to: routes.COOKIES_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.cookies
  },

  {
    to: routes.FEEDBACK_ROUTE,
    className: "mobile_menu padding-15",
    image: {
      name: images.black_right_arrow,
      className: "pull-right",
      alt: "arrow"
    },
    text: Translations.mobile_sidebar_services.feedback
  }
];

const SideBarMenuServices = () => {
  return <MobileSidebarMenu links={Links} />;
};

export default SideBarMenuServices;
