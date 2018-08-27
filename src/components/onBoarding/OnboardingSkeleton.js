import React, { Component } from "react";

import { OnboardingType } from "../../types";
import * as images from "../../constants/images";

class OnboardingSkelton extends Component {
  state = {};
  getStateAndHelpers = () => {
    //state and helper for onboarding process will come here
  };
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
                <a herf="#">About Us</a>
              </li>
              <li>
                <a href="/Register">Register</a>
              </li>
            </ul>
          </div>
        </header>
        <section>
          <div className="custom-container">
            <div className="login-wrapper">
              <h3 className="text-center">{topHeader}</h3>
              <p>{subHeader}</p>
              {this.props.children()}
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
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Data Protechtion & Privacy Policy</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">General terms & Conditions</a>
              </li>
              <li>
                <a href="#">NETZDG</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

OnboardingSkelton.propTypes = {
  ...OnboardingType
};

export default OnboardingSkelton;
