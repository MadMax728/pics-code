import React, { Component } from "react";
import { LeftSidebarNav } from "../../../ui-kit";
import * as routes from "../../../../lib/constants/routes";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

class SideBarOtherMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      links: [
        {
          to: `/news-feed/${this.props.match.params.id}`,
          className: "secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar_owner_menu.news_feed
        },
        {
          to: `/about/${this.props.match.params.id}`,
          className: "secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar_owner_menu.about
        },
        {
          to: `/saved/${this.props.match.params.id}`,
          className: "secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar_owner_menu.saved
        }
      ]
    };
  }

  render() {
    const { links } = this.state;

    return (
      <LeftSidebarNav
        links={links}
        header={`Menu`}
        ulClassName={"nav navbar-nav pull-right settings-menu"}
      />
    );
  }
}

SideBarOtherMenu.propTypes = {
  match: propTypes.any
};

export default SideBarOtherMenu;
