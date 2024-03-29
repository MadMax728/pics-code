import React, { Component } from "react";
import { LeftSidebarNav } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import PropTypes from "prop-types";

class SideBarOtherMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      links: [
        {
          to: `/news-feed/${this.props.match.params.username}`,
          className: "secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar_owner_menu.news_feed
        },
        {
          to: `/about/${this.props.match.params.username}`,
          className: "secondary_title",
          activeClassName: "active",
          text: Translations.left_sidebar_owner_menu.about
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
  match: PropTypes.any
};

export default SideBarOtherMenu;
