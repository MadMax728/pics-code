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
        <div className="mobile_logo">
          <a href="#">
            <img
              src={images.mobileHeaderLogo}
              width="20"
              height="20"
              alt="logo"
            />
          </a>
        </div>

        <div className="mobile_intro_text">
          <p>Picstagraph</p>
          <p>In der Picstagraph-App offenen</p>
        </div>

        <div className="text-uppercase">
          <RouteNavItem to={routes.OPEN_ROUTE} className={`mobile_open_btn`}>
            {Translations.navigation.open}
          </RouteNavItem>
        </div>
      </header>
    );
  }
}
