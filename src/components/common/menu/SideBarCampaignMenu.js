import React, { Component } from "react";
import { LeftSidebarNav } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";

class SideBarCampaignMenu extends Component {

  constructor(props, context) {
    super(props, context);
    const links = this.handleMenu();
    this.state = { links };
  }

  handleMenu = () => {
    const id = this.props.match.params.id;
    const type = this.props.match.params.type;
    const infoLink = {
      to: `${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${type}${"/"}${id}`,
      className: "menu_information secondary_title",
      activeClassName: "active",
      text: Translations.left_sidebar.information
    };
    const participantsLink = {
      to: `${routes.BASE_CAMPAIGN_PARTICIPANT_ROUTE}${type}${"/"}${id}`,
      className: "menu_participants secondary_title",
      activeClassName: "active",
      text: Translations.left_sidebar.participants
    }
    const links = type === "company" ? [ infoLink , participantsLink ]  : [ infoLink ];
    return links;
  }

  componentDidUpdate(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const links = this.handleMenu();
      this.setState({ links });
    }
  }

  render() {
    const { links } = this.state;
    return (
      <div>
        <LeftSidebarNav
          links={links}
          header={"Menu"}
          ulClassName={"nav navbar-nav pull-right"}
        />
      </div>
    );
  }
}

SideBarCampaignMenu.propTypes = {
  match: PropTypes.any
};

export default SideBarCampaignMenu;
