import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import propTypes from "prop-types";
import { Translations } from "../../../lib/translations";

class BaseFooter extends Component {
  render() {
    const { className } = this.props;

    return (
      <footer>
        <div className={className}>
          <ul>
            <li>
              <Link to={routes.SUPPORT_ROUTE}>
                {Translations.base_footer.support}
              </Link>{" "}
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
                {Translations.base_footer.general_term}
              </Link>
            </li>
            <li>
              <Link to={routes.NETZDG_ROUTE}>
                {Translations.base_footer.netzdg}
              </Link>
            </li>
            <li>
              <Link to={routes.LANGUAGE_ROUTE}>
                {Translations.base_footer.language}
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

BaseFooter.propTypes = {
  className: propTypes.string.isRequired
};

export default BaseFooter;
