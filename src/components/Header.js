import React, { Component } from "react";
import * as images from "../constants/images";
import { Translations } from "./translations";
import RouteNavItem from "./RouteNavItem";
import * as routes from "../constants/routes";

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
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed">
                  <img src={images.menu} alt="Menu" />
                </button>
                <a className="navbar-brand" href="/">
                  <img src={images.headerLogo} alt="logo" />
                </a>
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
                    to={routes.HOME}
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
                  <RouteNavItem
                    to={routes.MESSAGES_ROUTE}
                    className={`menu_messages`}
                    closeMenu={this.toggleNav}
                  >
                    <span>{Translations.navigation.messages}</span>
                  </RouteNavItem>
                  <RouteNavItem
                    to={routes.NOTIFICATIONS_ROUTE}
                    className={`menu_notifications`}
                    closeMenu={this.toggleNav}
                  >
                    <span>{Translations.navigation.notifications}</span>
                  </RouteNavItem>
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
