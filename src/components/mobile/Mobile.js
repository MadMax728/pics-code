import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "../../lib/constants/routes";
import Header from "./Header";
import Footer from "./Footer";
import { Home } from "./home";
import { Cookies } from "./cookies";
import { LeftSideBarMB } from "../common";

export default class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Cookies />
        <Header />
        <section className="main-section">
          <div className="container">
            <div className="row">
              <div>
                <Switch>
                  <Route exact path={routes.ROOT_ROUTE} component={Home} />

                  <LeftSideBarMB />

                  <Route component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
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

}
