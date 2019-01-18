import React, { Component } from "react";
import PropTypes from "prop-types";
import PictureCardBody from "./body/PictureCardBody";

class PictureCard extends Component {
  render() {
    const { item, index, isReport, history } = this.props;

    return (
      <div>
        <PictureCardBody
          pic={item}
          index={index}
          isReport={isReport}
          history={history}
        />
      </div>
    );
  }
}

PictureCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  history: PropTypes.any
};

export default PictureCard;
