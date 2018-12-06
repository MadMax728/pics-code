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
import { modalType } from "../../lib/constants/enumerations";
import { Redirect } from "react-router";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      userNavExpanded: false,
      offsetHeight: 0,
      searchText: ""
    };
  }

  componentDidMount = () => {
    document.addEventListener("click", this.handleOutsideClick);
    document.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

  toggleUserNav = () => {
    this.setState({ userNavExpanded: !this.state.userNavExpanded });
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  onScroll = () => {
    const offsetHeight = window.pageYOffset;
    this.setState({
      offsetHeight
    });
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
  onSearchClick = e => {
    e.preventDefault();
    const path = "?search=" + this.state.searchText;
    this.props.history.push(path);
  };

  onInputChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleModalMessage = () => {
    this.props.handleModalShow(modalType.messages);
  };

  handleMessage = e => {
    this.props.handleModalShow(modalType.messages, { id: e.target.id });
  };

  render() {
    return (
      <header className={this.state.offsetHeight > 250 ? "fixed" : "" }>
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
                      onChange={this.onInputChange}
                      value={this.state.searchText}
                    />
                    <span className="input-group-addon">
                      <button onClick={this.onSearchClick}>
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
                    to={`/campaign/company`}
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
                    <span className="badge badge-danger">100</span>
                    <span>{Translations.navigation.messages}</span>
                  </NavItem>

                  <NavDropdown
                    noCaret
                    title={<span>{Translations.navigation.notifications}</span>}
                    id="basic-nav-dropdown"
                    className={`menu_notifications`}
                  >
                    <Notifications handleMessage={this.handleMessage} />
                  </NavDropdown>

                  <RouteNavItem
                    to={routes.NEWS_FEED_ROUTE}
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
  handleModalShow: propTypes.func,
  history: propTypes.any
};
