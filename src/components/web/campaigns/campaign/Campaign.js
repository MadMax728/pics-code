import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";

import PropTypes from "prop-types";

class Campaign extends Component {
  render() {
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        <NewsFeeds
          campaigns={campaigns_list}
          handleModalShow={handleModalShow}
          handleModalInfoShow={handleModalInfoShow}
          isDescription
          isInformation={false}
        />
      </div>
    );
  }
}

Campaign.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Campaign;
