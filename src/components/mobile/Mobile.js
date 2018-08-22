import React, { Component } from "react";

export default class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div>
        <h1>Mobile View</h1>
      </div>
    );
  }
}
