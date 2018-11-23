import React, { Component } from "react";
import propTypes from "prop-types";
import MediaCardBody from "./body/MediaCardBody";

class MediaCard extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { item } = this.props;

    return <MediaCardBody item={item} />;
  }
}

MediaCard.propTypes = {
  item: propTypes.object.isRequired
};

export default MediaCard;
