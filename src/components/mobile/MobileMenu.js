import React, { Component } from "react";
import * as images from "../../lib/constants/images";
import { SideBarMBMenuInformation, SideBarMBMenuServices } from "../common";

import PropTypes from "prop-types";
import { Translations } from "../../lib/translations";

export default class MobileMenu extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="container-fluid">
          <div className="row">
            <div
              role="button"
              tabIndex={0}
              htmlFor="backButton"
              className="back_option padding-15"
              onClick={this.handleOnSetSidebarClose}
              onKeyPress={this.handleKeyPress}
            >
              <button type="button">
                <img src={images.black_left_arrow} alt="left_arrow" />
                {Translations.modal_header.back}
              </button>
            </div>
            <div className="mobile_menu_wrapper">
              <div className="normal_title padding-15">
                {Translations.left_sidebar.information}
              </div>
              <SideBarMBMenuInformation />
              <div className="normal_title padding-15">
                {Translations.smobile_sidebar_services.ervices}
              </div>
              <SideBarMBMenuServices />
            </div>
          </div>
        </div>
      </section>
    );
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

  handleNavClick = () => {
    this.toggleUserNav();
  };

  handleOnSetSidebarClose = () => {
    this.props.onSetSidebarClose();
  };

  handleKeyPress = () => {};
}

MobileMenu.propTypes = {
  onSetSidebarClose: PropTypes.func
};
