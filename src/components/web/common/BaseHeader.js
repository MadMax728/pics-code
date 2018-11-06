import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";

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
              <Link to={routes.ABOUTUS_ROUTE}>About Us</Link>
            </li>
            {window.location.href.indexOf("register") === -1 ? (
              <li>
                <Link to={routes.REGISTER_ROUTE}>Register</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </header>
    );
  }
}

export default BaseHeader;
