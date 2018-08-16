import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import NavItem from "react-bootstrap/lib/NavItem";

class RouteNavItem extends React.Component {
  static propTypes = {
    activeAtRoot: PropTypes.bool,
    children: PropTypes.any,
    closeMenu: PropTypes.func,
    eventKey: PropTypes.string,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    to: PropTypes.string.isRequired,
    tabRoot: PropTypes.string
  };

  static defaultProps = {
    activeAtRoot: false
  };

  pushToHistory = () => {
    this.props.history.push(this.props.to);

    if (this.props.closeMenu) {
      this.props.closeMenu();
    }
  };

  render() {
    const {
      to,
      eventKey,
      children,
      onSelect,
      location,
      activeAtRoot,
      tabRoot
    } = this.props;

    const path = location.pathname.toLowerCase();

    // we are active if path matches the to location
    // or path is at root and we can be active when at root.
    const isActive =
      path === to.toLowerCase() ||
      (activeAtRoot && path === "/") ||
      (tabRoot && path.toLowerCase().includes(tabRoot));

    return (
      <NavItem
        className="route-item"
        eventKey={eventKey}
        onSelect={onSelect}
        onClick={this.pushToHistory}
        active={isActive}
      >
        {children}
      </NavItem>
    );
  }
}

export default withRouter(RouteNavItem);
