import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageItem extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="feed_image">
        {/**
         * If we need to remove responsive with 16by9
         * Just need to remove following classes from div
         * { embed-responsive embed-responsive-16by9 }
         * { img-responsive embed-responsive-item }
         * { isOtherCardExist } will check if other card exist with image or not
         */}
        <div className={`embed-responsive embed-responsive-16by9`}>
          <div className={`img-responsive embed-responsive-item`}>
            <img
              src={this.props.item}
              alt="altmage"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    );
  }
}

ImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  isOtherCardExist: PropTypes.bool.isRequired
};

export default ImageItem;
