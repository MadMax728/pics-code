import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';
import { Loader } from '../loading-indicator';
class ImageItem extends PureComponent {

  render() {
    return (
      <div className="bg-black feed_image">
        {/**
         * If we need to remove responsive with 16by9
         * Just need to remove following classes from div
         * { embed-responsive embed-responsive-16by9 }
         * { img-responsive embed-responsive-item }
         * { isOtherCardExist } will check if other card exist with image or not
         */}
        <div className={`embed-responsive embed-responsive-16by9`}>
          <div className={`img-responsive embed-responsive-item`}>
            <LazyLoad height={200} once={true} offset={[-200, 0]} placeholder={<Loader />}>
              <img
                  src={this.props.item}
                  alt="altmage"
                  className="img-responsive"
                />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

ImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  // isOtherCardExist: PropTypes.bool.isRequired
};

export default ImageItem;
