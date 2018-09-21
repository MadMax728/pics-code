import React, { Component } from "react";
import * as images from "../../lib/constants/images";
import { Translations } from "../../lib/translations";
import RouteNavItem from "../RouteNavItem";
import * as routes from "../../lib/constants/routes";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import NavItem from "react-bootstrap/lib/NavItem";
import propTypes from "prop-types";

import { Notifications } from "../web/dashboard";

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

  handleModalMessage = () => {
    this.props.handleModalShow();
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed">
                  <img src={images.menu} alt="Menu" />
                </button>
                <Link to={routes.ROOT_ROUTE} className="navbar-brand">
                  <img src={images.headerLogo} alt="logo" />
                </Link>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <form className="navbar-form navbar-left">
                  <div className="input-group search-input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-addon">
                      <button type="submit">
                        <span className="search_icon">
                          <img src={images.search} alt="Search" />
                        </span>
                      </button>
                    </span>
                  </div>
                </form>
                <ul className="nav navbar-nav pull-right">
                  <RouteNavItem
                    to={routes.ROOT_ROUTE}
                    className={`menu_home`}
                    activeAtRoot
                    closeMenu={this.toggleNav}
                  >
                    <span>{Translations.navigation.home}</span>
                  </RouteNavItem>
                  <RouteNavItem
                    to={routes.CAMPAIGN_ROUTE}
                    className={`menu_public`}
                    closeMenu={this.toggleNav}
                  >
                    <span>{Translations.navigation.campaign}</span>
                  </RouteNavItem>

                  <NavItem
                    className={`menu_messages`}
                    nocaret={"true"}
                    onClick={this.handleModalMessage}
                  >
                    <span>{Translations.navigation.messages}</span>
                  </NavItem>

                  <NavDropdown
                    noCaret={true}
                    title={<span>{Translations.navigation.notifications}</span>}
                    id="basic-nav-dropdown"
                    className={`menu_notifications`}
                  >
                    <Notifications />
                  </NavDropdown>

                  <RouteNavItem
                    to={routes.MY_PROFILE_ROUTE}
                    className={`menu_profile`}
                    closeMenu={this.toggleNav}
                  >
                    <span>{Translations.navigation.profile}</span>
                  </RouteNavItem>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  handleModalShow: propTypes.func
};
