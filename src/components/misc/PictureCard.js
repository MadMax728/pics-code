import React, { Component } from "react";
import PropTypes from "prop-types";
import PictureCardBody from "./body/PictureCardBody";

class PictureCard extends Component {
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
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default PictureCard;
