import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class PostPopUp extends Component {
  render() {
    // const {handleModalInfoHide} = this.props;
    return (
      <div className="post-action-links">
        <Link to={""}>Report post</Link>
        <Link to={""}>Save post </Link>
        <Link to={""}>locks / unlocks content </Link>
      </div>
    );
  }
}

PostPopUp.propTypes = {
  handleModalInfoHide: propTypes.func
};

export default PostPopUp;
