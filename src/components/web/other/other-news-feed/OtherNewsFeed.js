import React, { Component } from "react";
import { NewsFeed } from "../../user";
import PropTypes from "prop-types";

class OtherNewsFeed extends Component {
  render() {
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <NewsFeed
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
      />
    );
  }
}

OtherNewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default OtherNewsFeed;
