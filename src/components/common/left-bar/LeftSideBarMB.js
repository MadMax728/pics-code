import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import {
  AboutUsInformation,
  Advertising,
  Cookies,
  NetzDg,
  LawEnforcementAgencyMB,
  LegalNotice,
  Support,
  GeneralTermsAndConditions,
  TermsOfUse,
  CampaignsInformation,
  PlatformPolicy,
  AdvertisingPolicy,
  CampaignPolicy,
  CancellationPolicy,
  DataProtectionAndPrivacyPolicy,
  Verification,
  ReportProblem,
  DeleteAccountMB,
  FeedbackMB,
  ReportedContentMB,
  DataDownload,
  PaymentMethod
} from "../../web/information";

const LeftSideBarMB = () => {
  return (
    <div>
      <Route
        exact
        path={routes.MB_ABOUT_US_INFORMATION_ROUTE}
        component={AboutUsInformation}
      />
      <Route exact path={routes.LEGAL_NOTICE_ROUTE} component={LegalNotice} />
      <Route exact path={routes.SUPPORT_ROUTE} component={Support} />
      <Route
        exact
        path={routes.MB_CAMPAIGN_INFORMATION_ROUTE}
        component={CampaignsInformation}
      />
      <Route exact path={routes.ADS_ROUTE} component={Advertising} />
      <Route exact path={routes.VERIFICATION_ROUTE} component={Verification} />

      <Route
        exact
        path={routes.TERMS_CONDITIONS_ROUTE}
        component={GeneralTermsAndConditions}
      />
      <Route
        exact
        path={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}
        component={DataProtectionAndPrivacyPolicy}
      />
      <Route exact path={routes.TEARMS_USE_ROUTE} component={TermsOfUse} />
      <Route
        exact
        path={routes.PLATFORM_POLICY_ROUTE}
        component={PlatformPolicy}
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
        component={ReportedContentMB}
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
        component={DeleteAccountMB}
      />
      <Route
        exact
        path={routes.LAW_ENFORCEMENT_AGENCY_ROUTE}
        component={LawEnforcementAgencyMB}
      />
      <Route
        exact
        path={routes.REPORT_PROBLEM_ROUTE}
        component={ReportProblem}
      />
      <Route exact path={routes.COOKIES_ROUTE} component={Cookies} />
      <Route exact path={routes.FEEDBACK_ROUTE} component={FeedbackMB} />
    </div>
  );
};

export default LeftSideBarMB;
