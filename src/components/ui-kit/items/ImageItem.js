import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { Loader } from "../loading-indicator";
import ImageGallery from "./ImageGallery";

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
    };
  }

  render() {
    const { isLoading, item, userName, classNames } = this.props;
    const { lightboxIsOpen } = this.state;
    return (
      <div className="bg-black feed_image">
        {/**
         * If we need to remove responsive with 16by9
         * Just need to remove following classes from div
         * { embed-responsive embed-responsive-16by9 }
         * { img-responsive embed-responsive-item }
         * { isOtherCardExist } will check if other card exist with image or not
         */}
        <div className={`${classNames}`}>
          <div className={`img-responsive embed-responsive-item`}>
            <LazyLoad height={400} once offset={[-400, 0]}>
              {item && (
                <img
                  src={item}
                  alt="altmage"
                  role="presentation"
                  onClick={this.openLightbox}
                  onKeyDown={this.openLightbox}
                  className="img-responsive"
                />
              )}
            </LazyLoad>
          </div>
        </div>
        {/* {  
          item &&(
          <ImageGallery image={item} 
                        caption={userName}
                        lightboxIsOpen={lightboxIsOpen} 
                        closeLightbox={this.closeLightbox}>
          </ImageGallery>
        )} */}
      </div>
    );
  }

  openLightbox = () => {
    this.setState({ lightboxIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false });
  };
}

ImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  userName: PropTypes.string,
  isLoading: PropTypes.bool,
  classNames: PropTypes.string
};

export default ImageItem;
