import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";

class BaseFooter extends Component {
  render() {
    return (
      <footer>
        <div className="custom-container">
          <ul>
            <li>
              <Link to={routes.SUPPORT_ROUTE}>Support</Link>{" "}
            </li>
            <li>
              <Link to={routes.DATA_PROTECTION_AND_PRIVACY_POLICY_ROUTE}>
                Data Protechtion & Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={routes.LEGAL_NOTICE_ROUTE}>Legal Notice</Link>
            </li>
            <li>
              <Link to={routes.TERMS_CONDITIONS_ROUTE}>
                General terms & Conditions
              </Link>
            </li>
            <li>
              <Link to={routes.NETZDG_ROUTE}>NETZDG</Link>
            </li>
            <li>
              <Link to={routes.LANGUAGE_ROUTE}>Language</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default BaseFooter;
