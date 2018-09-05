import React, { Component } from "react";
import * as images from "../../constants/images";
import * as routes from "../../constants/routes";
import { Link } from "react-router-dom";

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

  handleNavClick = () => {
    this.toggleUserNav();
  };

  render() {
    return (
      <header>
        <div className="mobile_logo">
          <Link to={routes.ROOT_ROUTE}>
            <img
              src={images.mobileHeaderLogo}
              width="30"
              height="30"
              alt="logo"
            />
          </Link>
        </div>

        <div className="mobile_intro_text">
          <p>Picstagraph</p>
          <p>In der Picstagraph-App offenen</p>
        </div>
      </header>
    );
  }
}
