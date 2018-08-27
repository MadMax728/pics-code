import React, { Component } from "react";
import * as images from "../../constants/images";
import { Translations } from "../translations";
import RouteNavItem from "../RouteNavItem";
import * as routes from "../../constants/routes";

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    document.addEventListener("click", this.handleOutsideClick);
  };

  componenWillUnmount = () => {
    document.removeEventListener("click", this.handleOutsideClick);
  };

  toggleUserNav = () => {
    this.setState({ userNavExpanded: !this.state.userNavExpanded });
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleOutsideClick = e => {
    if (
      !this.wrapperRef ||
      this.wrapperRef.contains(e.target) ||
      !this.state.userNavExpanded
    ) {
      return;
    }

    this.toggleUserNav();
  };

  handleNavClick = evt => {
    this.toggleUserNav();
  };

  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="back_option padding-15">
              <a href="/">
                <img src="images/black_left_arrow.svg" alt="left_arrow" />
                Back
              </a>
            </div>
            <div className="mobile_menu_wrapper">
              <div className="normal_title padding-15">Information</div>
              <a href="/" className="mobile_menu padding-15">
                About Us
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Legal Notice
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Support
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Campaigns
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Ads
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Verification
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <div className="normal_title padding-15">Services</div>
              <a href="/" className="mobile_menu padding-15">
                General Terms and Conditions
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Data protechtion and privacy policy
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Terms of use
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Platform policy
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Advertising policy
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Campaign policy
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                NetzDg
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Reported content
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Payment method
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Cancellation policy
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Data Download
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Delete account
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Law enforcement agency
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Report a problem
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Cookies
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
              <a href="/" className="mobile_menu padding-15">
                Feedback
                <img
                  src="images/black_right_arrow.svg"
                  alt="arrow"
                  className="pull-right"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
