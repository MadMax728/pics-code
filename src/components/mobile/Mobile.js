import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import Header from "../Header";
import Footer from "../Footer";
import { Home } from "./home";

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
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div>
                <Switch>
                  <Route exact path={routes.ROOT_ROUTE} component={Home} />
                  {/* <Route
                    exact
                    path={routes.CAMPAIGN_ROUTE}
                    component={Campaign}
                  />
                  <Route
                    exact
                    path={routes.MY_PROFILE_ROUTE}
                    component={UserProfile}
                  /> */}
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
}
