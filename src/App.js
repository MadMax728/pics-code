import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CookieConsent from "react-cookie-consent";
import * as routes from "./lib/constants/routes";
import { AdminLogin, LoginLinkSend } from "./components/back-office";
import { Home, BackOfficeHome } from "./containers";
import Mobile from "./components/mobile/Mobile";
import { Translations } from "./lib/translations";
import * as userService from "./services/userService";
import { Auth } from "./auth";
import {
  Login,
  Register,
  ResetEmail,
  ResetPassword,
  ForgotPassword
} from "./components/web/auth-flow";
import {
  GeneralTermsAndConditions,
  Support,
  LegalNotice
} from "./components/web/information";
// import { AboutUs } from './components/web/information/about-us';
class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  //logout handler for any user
  handleLogout = () => {
    //get the props from props.location
    //https://stackoverflow.com/questions/35352638/how-to-get-parameter-value-from-query-string
    // const query = qs.parse(this.props.location.search);
    //https://github.com/ReactTraining/react-router/issues/4410
    //https://stackoverflow.com/questions/42862253/how-to-parse-query-string-in-react-router-v4
    const query = new URLSearchParams(this.props.location.search);
    const isNeedLogout = query.get("logout");
    //check if logout param is exist
    if (isNeedLogout === true || isNeedLogout === "true") {
      Auth.logoutUser();
      userService.logout();
      //https://github.com/ReactTraining/react-router/issues/4802
      return <Redirect to={routes.ROOT_ROUTE} />;
    }

    return null;
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  isUserAuthenticated = () => {
    if (window.location.href.indexOf("back-office") === -1) {
      localStorage.removeItem("admin_access_token");
    }
    if (!Auth.isUserAuthenticated()) {
      return (
        <div>
          <Route component={Login} />
        </div>
      );
    }

    return (
      <div>
        <Route component={Home} />
        {Auth.isUserAdmin() && <Route render={this.backOfficeRender} />}
        {/* <Route exact path={'*'} component={PageNotFound} /> */}
      </div>
    );
  };

  isAdminUserAuthenticated = () => {
    if (!Auth.isAdminUserAuthenticated()) {
      return <Redirect to={routes.BACK_OFFICE_LOGIN_ROUTE} />;
    }

    return (
      <div>
        <Route component={BackOfficeHome} />
      </div>
    );
  };

  backOfficeRender = () => {
    const root_route = routes.BACK_OFFICE_ROOT_ROUTE;
    
    return (
      <Switch>
        <Route
          exact
          path={routes.BACK_OFFICE_LOGIN_ROUTE}
          component={LoginLinkSend}
        />
        <Route
          exact
          path={routes.LOGIN_PASSWORD_ROUTE}
          component={AdminLogin}
        />
        <Route
          path={root_route}
          render={this.isAdminUserAuthenticated}
        />
      </Switch>
    );
  };

  webRender = () => {
    return (
      <Switch>
        <Route
          exact
          path={routes.BACK_OFFICE_LOGIN_ROUTE}
          component={LoginLinkSend}
        />
        <Route
          exact
          path={routes.LOGIN_PASSWORD_ROUTE}
          component={AdminLogin}
        />
        <Route exact path={routes.REGISTER_ROUTE} component={Register} />
        <Route
          exact
          path={routes.TERMS_CONDITIONS_ROUTE}
          component={GeneralTermsAndConditions}
        />
        <Route exact path={routes.SUPPORT_ROUTE} component={Support} />
        {/*<Route exact path={routes.LEGAL_NOTICE_ROUTE} component={LegalNotice}/>*/}
        <Route exact path={routes.LEGAL_NOTICE_ROUTE} component={LegalNotice} />
        {/*<Route exact path={routes.ABOUTUS_ROUTE} component={AboutUs}/>*/}
        <Route exact path={routes.RESET_EMAIL} component={ResetEmail} />
        <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
        <Route path={routes.ROOT_ROUTE} render={this.isUserAuthenticated} />
      </Switch>
    );
  };

  mobileRender = () => {
    return (
      <div>
        <Mobile />
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 760;
    this.handleLogout();
    if (isMobile) {
      return (
        <div>
          <Route render={this.mobileRender} />
        </div>
      );
    }
    return (
      <div>
        <Route render={this.webRender} />
        <CookieConsent
          buttonText="Got it!"
          style={{ background: "white", border: "solid 1px #1f58a6", color:"black" }}
          buttonStyle={{ float: "right" }}
        >
          <p className="text-center">For a better user experience we use  
            <Link to={routes.COOKIES_ROUTE}>
              {Translations.base_footer.cookies}
            </Link>. By using picstagraph you do agree.
          </p>
        </CookieConsent>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.any
};

export default withRouter(App);
