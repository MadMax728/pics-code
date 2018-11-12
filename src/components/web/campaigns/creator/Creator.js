import React, { Component } from "react";
import { creator_campaigns_list } from "../../../../mock-data";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";

class Creator extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      creator_campaigns: creator_campaigns_list
    };
  }
  render() {
    const { creator_campaigns } = this.state;
    const { handleModalShow, handleModalInfoShow } = this.props;

    return (
      <div className={"padding-rl-10 middle-section"}>
        <NewsFeeds
          campaigns={creator_campaigns}
          handleModalShow={handleModalShow}
          handleModalInfoShow={handleModalInfoShow}
          isDescription={false}
          isInformation
        />
      </div>
    );
  }
}

Creator.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Creator;
