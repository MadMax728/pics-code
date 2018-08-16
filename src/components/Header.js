import React, { Component } from "react";
import * as images from "../constants/images";
import { Link } from "react-router-dom";
import { Translations } from "./translations";
import RouteNavItem from "./RouteNavItem";
import DateFormat from "./DateFormat";
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

  handleNavClick = evt => {
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
                <a class="navbar-brand" href="#">
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
                  <li>
                    <a href="/" className="menu_home">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="menu_public">
                      <span>Campaign</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="menu_messages">
                      <span>Messages</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="menu_notifications">
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="menu_profile">
                      <span>Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
