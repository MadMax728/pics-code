import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import {
  AboutUs,
  Ads,
  Cookies,
  Feedback,
  NetzDg,
  LawEnforcementAgency,
  LegalNotice,
  Support,
  TermsConditions,
  TermsUse
} from "../../components/web/stand-alone";
import { Campaign } from "../../components/web/campaigns";
import { Verification, DeleteAccount } from "../../components/web/User";

import {
  PaltformPolicy,
  AdvertisingPolicy,
  CampaignPolicy,
  CancellationPolicy,
  DataProtectionAndPrivacyPolicy
} from "../web/policy";
import {
  DataDownload,
  PaymentMethod,
  ReportProblem,
  ReportedContent
} from "../../components/web/dashboard";

const LeftSideBarMB = () => {
  return (
    <div>
      <Route exact path={routes.ABOUTUS_ROUTE} component={AboutUs} />
      <Route exact path={routes.LEGAL_NOTICE_ROUTE} component={LegalNotice} />
      <Route exact path={routes.SUPPORT_ROUTE} component={Support} />
      <Route exact path={routes.CAMPAIGN_ROUTE} component={Campaign} />
      <Route exact path={routes.ADS_ROUTE} component={Ads} />
      <Route exact path={routes.VERIFICATION_ROUTE} component={Verification} />

      <Route
        exact
        path={routes.TERMS_CONDITIONS_ROUTE}
        component={TermsConditions}
      />
      <Route
        exact
        path={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}
        component={DataProtectionAndPrivacyPolicy}
      />
      <Route exact path={routes.TEARMS_USE_ROUTE} component={TermsUse} />
      <Route
        exact
        path={routes.PLATFORM_POLICY_ROUTE}
        component={PaltformPolicy}
      />
      <Route
        exact
        path={routes.ADVERTISING_POLICY_ROUTE}
        component={AdvertisingPolicy}
      />
      <Route
        exact
        path={routes.CAMPAIGN_POLICY_ROUTE}
        component={CampaignPolicy}
      />
      <Route exact path={routes.NETZDG_ROUTE} component={NetzDg} />
      <Route
        exact
        path={routes.REPORTED_CONTENT_ROUTE}
        component={ReportedContent}
      />
      <Route
        exact
        path={routes.PAYMENT_METHOD_ROUTE}
        component={PaymentMethod}
      />
      <Route
        exact
        path={routes.CANCELLATION_POLICY_ROUTE}
        component={CancellationPolicy}
      />
      <Route exact path={routes.DATA_DOWNLOAD_ROUTE} component={DataDownload} />
      <Route
        exact
        path={routes.DELETE_ACCOUNT_ROUTE}
        component={DeleteAccount}
      />
      <Route
        exact
        path={routes.LAW_ENFORCEMENT_AGENCY_ROUTE}
        component={LawEnforcementAgency}
      />
      <Route
        exact
        path={routes.REPORT_PROBLEM_ROUTE}
        component={ReportProblem}
      />
      <Route exact path={routes.COOKIES_ROUTE} component={Cookies} />
      <Route exact path={routes.FEEDBACK_ROUTE} component={Feedback} />
    </div>
  );
};

export default LeftSideBarMB;
