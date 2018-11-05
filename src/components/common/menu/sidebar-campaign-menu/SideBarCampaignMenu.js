import React, { Component } from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";

class SideBarCampaignMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      links: [
        {
          to: `/campaign/${this.props.match.params.id}/information`,
          className: "menu_information secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar.information
        },
        {
          to: `/campaign/${this.props.match.params.id}/participant`,
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

export default SideBarCampaignMenu;
