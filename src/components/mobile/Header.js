import React, { Component } from "react";
import * as images from "../../constants/images";
import { Translations } from "../translations";
import RouteNavItem from "../RouteNavItem";
import * as routes from "../../constants/routes";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      userNavExpanded: false
    };
  }

  componentDidMount = () => {
    document.addEventListener("click", this.handleOutsideClick);
  };
  componenWillUnmount = () => {
    document.removeEventListener("click", this.handleOutsideClick);
  };
  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
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
      <header>
        <div class="mobile_logo">
          <a href="/">
            <img
              src={images.mobileHeaderLogo}
              width="20"
              height="20"
              alt="logo"
            />
          </a>
        </div>
        <div class="mobile_intro_text">
          <p>Picstagraph</p>
          <p>In der Picstagraph-App offenen</p>
        </div>
        <div class="text-uppercase padding-15">
          <RouteNavItem to={routes.OPEN_ROUTE} className={`mobile_open_btn`}>
            <span>{Translations.navigation.open}</span>
          </RouteNavItem>
        </div>
      </header>
    );
  }
}
