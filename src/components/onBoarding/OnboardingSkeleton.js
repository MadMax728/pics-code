import React, { Component } from "react";

import { string, bool, func } from "prop-types";
import * as images from "../../lib/constants/images";
class OnboardingSkelton extends Component {
  state = {};

  getStateAndHelpers = {};
  render() {
    const { topHeader, subHeader, showDownloadStore } = this.props;
    return (
      <div className="login-process">
        <header>
          <div className="custom-container">
            <div className="login-logo">
              <a href="/">
                <img src={images.loginLogo} alt={"login"} />
              </a>
            </div>
            <ul className="login-header-menu">
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/register">Register</a>
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
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/support">Data Protechtion & Privacy Policy</a>
              </li>
              <li>
                <a href="/support">Legal Notice</a>
              </li>
              <li>
                <a href="/support">General terms & Conditions</a>
              </li>
              <li>
                <a href="/support">NETZDG</a>
              </li>
              <li>
                <a href="/support">Language</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

OnboardingSkelton.propTypes = {
  topHeader: string,
  subHeader: string,
  showDownloadStore: bool,
  children: func.isRequired
};

export default OnboardingSkelton;
