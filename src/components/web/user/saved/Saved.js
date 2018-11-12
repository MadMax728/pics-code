import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { saved_campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

class Saved extends Component {
  render() {
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        <NewsFeeds
          campaigns={saved_campaigns_list}
          handleModalShow={handleModalShow}
          handleModalInfoShow={handleModalInfoShow}
          isDescription
          isInformation={false}
        />
      </div>
    );
  }
}

Saved.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default Saved;
