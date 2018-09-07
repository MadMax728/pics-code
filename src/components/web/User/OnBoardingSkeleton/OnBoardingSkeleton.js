import React, { Component } from "react";

import { string, bool, func } from "prop-types";
import * as images from "../../../../lib/constants/images";
import * as routes from "../../../../lib/constants/routes";
import { Link } from "react-router-dom";

class OnBoardingSkeleton extends Component {
  state = {};

  getStateAndHelpers = {};
  render() {
    const { topHeader, subHeader, showDownloadStore } = this.props;
    return (
      <div className="login-process">
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
              <li>
                <Link to={routes.REGISTER_ROUTE}>Register</Link>
              </li>
            </ul>
          </div>
        </header>
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{topHeader}</h3>
              <p>{subHeader}</p>
              {this.props.children(this.getStateAndHelpers)}
              {showDownloadStore && (
                <div className="app-download">
                  <div>App download</div>
                  <a href="https://itunes.apple.com/">
                    <img src={images.iphone} alt={"iphone"} />
                  </a>
                  <a href="https://play.google.com/">
                    <img src={images.andriod} alt={"android"} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        <footer>
          <div className="custom-container">
            <ul>
              <li>
                <Link to={routes.SUPPORT_ROUTE}>Support</Link>]{" "}
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
      </div>
    );
  }
}

OnBoardingSkeleton.propTypes = {
  topHeader: string,
  subHeader: string,
  showDownloadStore: bool,
  children: func.isRequired
};

export default OnBoardingSkeleton;
