import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";

import propTypes from "prop-types";

class Participants extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      participants_campaigns_list: campaigns_list
    };
  }

  render() {
    const { handleModalInfoShow, handleModalShow } = this.props;
    const { participants_campaigns_list } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participants_campaigns_list && (
          <NewsFeeds
            campaigns={participants_campaigns_list}
            handleModalShow={handleModalShow}
            handleModalInfoShow={handleModalInfoShow}
            isDescription
            isInformation={false}
          />
        )}
      </div>
    );
  }
}

Participants.propTypes = {
  handleModalShow: propTypes.func,
  handleModalInfoShow: propTypes.func
};

export default Participants;
