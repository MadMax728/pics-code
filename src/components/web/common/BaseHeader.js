import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";

class BaseHeader extends Component {
  render() {
    return (
      <header>
        <div className="custom-container">
          <div className="login-logo">
            <Link to={routes.ROOT_ROUTE}>
              <img src={images.loginLogo} alt={"login"} />
            </Link>
          </div>
          <ul className="login-header-menu">
            <li>
              <Link to={routes.ABOUTUS_ROUTE}>
                {Translations.mobile_sidebar_information.aboutus}
              </Link>
            </li>
            <li>
              <Link to={routes.REGISTER_ROUTE}>
                {Translations.register.register}
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default BaseHeader;
