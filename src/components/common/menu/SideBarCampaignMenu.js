import React, { Component } from "react";
import { LeftSidebarNav } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";

class SideBarCampaignMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      links: [
        {
          to: `${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${
            this.props.match.params.id
          }`,
          className: "menu_information secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar.information
        },
        {
          to: `${routes.BASE_CAMPAIGN_PARTICIPANT_ROUTE}${
            this.props.match.params.id
          }`,
          className: "menu_participants secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar.participants
        }
      ]
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div>
        <LeftSidebarNav
          links={links}
          header={`Menu`}
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
