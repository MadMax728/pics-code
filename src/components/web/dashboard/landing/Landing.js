import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { news_campaigns_list } from "../../../../mock-data";

class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaigns: news_campaigns_list
    };
  }

  render() {
    const { handleModalInfoShow, handleModalShow } = this.props;
    const { campaigns } = this.state;

    return (
      <div className={"middle-section padding-rl-10"}>
        <NewsFeeds
          campaigns={campaigns}
          handleModalInfoShow={handleModalInfoShow}
          handleModalShow={handleModalShow}
        />
      </div>
    );
  }
}

Landing.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func
};
export default Landing;