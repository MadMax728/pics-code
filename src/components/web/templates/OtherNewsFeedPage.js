import React, { Component } from "react";
import { NewsFeed } from "../../web/user";
import PropTypes from "prop-types";

class OtherNewsFeedPage extends Component {
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

OtherNewsFeedPage.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default OtherNewsFeedPage;
