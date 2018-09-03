import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../../constants/routes";
import { AboutUs } from "../../aboutUs";
import { LegalNotice } from "../../legalNotice";
import { Support } from "../../support";
import { Campaigns } from "../../campaigns";
import { Ads } from "../../ads";
import { Verification } from "../../verification";

import { TermsConditions } from "../../termsConditions";
import { DataProtectionAndPrivacyPolicy } from "../../dataProtectionAndPrivacyPolicy";
import { TermsUse } from "../../termsUse";
import { PaltformPolicy } from "../../paltformPolicy";
import { AdvertisingPolicy } from "../../advertisingPolicy";
import { CampaignPolicy } from "../../campaignPolicy";
import { NetzDg } from "../../netzDg";
import { ReportedContent } from "../../reportedContent";
import { PaymentMethod } from "../../paymentMethod";
import { CancellationPolicy } from "../../cancellationPolicy";
import { DataDownload } from "../../dataDownload";
import { DeleteAccount } from "../../deleteAccount";
import { LawEnforcementAgency } from "../../lawEnforcementAgency";
import { ReportProblem } from "../../reportProblem";
import { Cookies } from "../../cookies";
import { Feedback } from "../../feedback";

const LeftSideBar = () => {
  return (
    <div>
      <Route exact path={routes.ABOUTUS_ROUTE} component={AboutUs} />
      <Route exact path={routes.LEGAL_NOTICE_ROUTE} component={LegalNotice} />
      <Route exact path={routes.SUPPORT_ROUTE} component={Support} />
      <Route exact path={routes.CAMPAIGNS_ROUTE} component={Campaigns} />
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

export default LeftSideBar;
