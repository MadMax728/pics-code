import React, { Component } from "react";
import * as images from "../../constants/images";
import {
  SideBarMenuInformation,
  SideBarMenuServices
} from "./common/sideBarMenu";

import PropTypes from "prop-types";

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

  handleNavClick = () => {
    this.toggleUserNav();
  };

  handleOnSetSidebarClose = () => {
    this.props.onSetSidebarClose();
  };

  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div
              role="button"
              for="backButton"
              className="back_option padding-15"
              onClick={this.handleOnSetSidebarClose}
            >
              <button type="button">
                <img src={images.black_left_arrow} alt="left_arrow" />
                Back
              </button>
            </div>
            <div className="mobile_menu_wrapper">
              <div className="normal_title padding-15">Information</div>
              <SideBarMenuInformation />
              <div className="normal_title padding-15">Services</div>
              <SideBarMenuServices />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MobileMenu.propTypes = {
  onSetSidebarClose: PropTypes.func
};
