import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import propTypes from "prop-types";

class Processed extends Component {
  onKeyDown = () => {};

  render() {
    const { handleModalInfoHide } = this.props;
    return (
      <div>
        <div className="normal_title padding-15 modal-normal-title">
          Processed ?
        </div>
        <div className="processed-options">
          <span
            role="button"
            tabIndex="0"
            onClick={handleModalInfoHide}
            onKeyDown={this.onKeyDown}
          >
            <img src={images.close} alt="close" />
          </span>
          <span>
            <img src={images.green_tick} alt="green_tick" />
          </span>
        </div>
      </div>
    );
  }
}

Processed.propTypes = {
  handleModalInfoHide: propTypes.func
};

export default Processed;
