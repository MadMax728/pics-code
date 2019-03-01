import React, { Component } from "react";
import * as images from "../../lib/constants/images";
import { Translations } from "../../lib/translations";
import RouteNavItem from "../RouteNavItem";
import * as routes from "../../lib/constants/routes";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import PropTypes from "prop-types";
import { Notifications } from "../web/dashboard";
import { modalType } from "../../lib/constants/enumerations";
import { getSearchForHeader } from "../../actions";
import { connect } from "react-redux";
import * as websocket from "../../websocket";
import { Auth } from "../../auth";
import { Button, Input } from "../ui-kit";
import InputSerach from './search/InputSerach';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      userNavExpanded: false,
      offsetHeight: 0,
      searchText: "",
      messageCount: 0,
      menuIsOpened: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo && userInfo.id) {
      websocket.join(null, null, userInfo.id);
      websocket.messagecount(userInfo.id, count => {
        if (count && count.messageCount) {
          this.setState({ messageCount: count.messageCount });
        }
      });
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.addEventListener("click", this.handleOutsideClick);
    document.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  toggleNav = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

  handleToggle = () => {
    const { menuIsOpened } = this.state;
    this.setState({ menuIsOpened: !menuIsOpened });
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
    this.setState({ searchText: "" });
    this.props.getSearchForHeader(this.state.searchText);
  };



  handleModalMessage = () => {
    this.props.handleModalShow(modalType.messages);
  };

  handleMessage = e => {
    this.props.handleModalShow(modalType.messages, { id: e.target.id });
  };

  render() {
    const { messageCount } = this.state;
    let messageCountView = messageCount;
    if (messageCount < 100) {
      messageCountView = messageCount;
    } else if (messageCount > 99) {
      messageCountView = "99+";
    }
    return (
      <header className="fixed">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <Button
                  type="button"
                  className="navbar-toggle collapsed"
                  text={<img src={images.menu} alt="Menu" />}
                />
                <Link to={routes.ROOT_ROUTE} className="navbar-brand">
                  <img src={images.headerLogo} alt="logo" />
                </Link>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <InputSerach />
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

                  <RouteNavItem
                    to={routes.MESSAGES_ROUTE}
                    className={`menu_messages`}
                    closeMenu={this.toggleNav}
                  >
                    {messageCount && messageCount > 0 ? (
                      <span className="badge badge-danger">
                        {messageCountView}
                      </span>
                    ) : (
                        ""
                      )}
                    <span>{Translations.navigation.messages}</span>
                  </RouteNavItem>

                  <NavDropdown
                    noCaret
                    title={<span>{Translations.navigation.notifications}</span>}
                    id="basic-nav-dropdown"
                    className={`menu_notifications`}
                    open={this.state.menuIsOpened}
                    onToggle={this.handleToggle}
                  >
                    <Notifications
                      handleMessage={this.handleMessage}
                      history={this.props.history}
                      handleToggle={this.handleToggle}
                    />
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

const mapStateToProps = state => ({
  searchData: state.searchData,
  usersData: state.usersData
});

const mapDispatchToProps = {
  getSearchForHeader
};

Header.propTypes = {
  handleModalShow: PropTypes.func,
  history: PropTypes.any,
  getSearchForHeader: PropTypes.func,
  usersData: PropTypes.any,
  searchData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
