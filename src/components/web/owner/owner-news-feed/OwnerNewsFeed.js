import React, { Component } from "react";
import { NewsFeed } from "../../user";
import PropTypes from "prop-types";

class OwnerNewsFeed extends Component {
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

OwnerNewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default OwnerNewsFeed;
