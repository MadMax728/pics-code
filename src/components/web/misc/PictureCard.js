import React, { Component } from "react";
import propTypes from "prop-types";
import PictureCardBody from "./body/PictureCardBody";

class PictureCard extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { item, index } = this.props;

    return (
      <div>
        <PictureCardBody pic={item} index={index} />
      </div>
    );
  }
}

PictureCard.propTypes = {
  item: propTypes.object.isRequired,
  index: propTypes.object.isRequired
};

export default PictureCard;
