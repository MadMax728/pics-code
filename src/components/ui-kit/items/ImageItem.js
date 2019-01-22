import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';
import { Loader } from '../loading-indicator';
import ImageGallery from "./ImageGallery";

class ImageItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
    }
  }

  render() {
    const { isLoading, item, userName } = this.props;
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
        <div className={`embed-responsive embed-responsive-16by9`}>
          <div className={`img-responsive embed-responsive-item`}>
            {isLoading ?
              <Loader />
              :
              (
                <LazyLoad height={200} once offset={[-200, 0]} placeholder={<Loader />}>
                  {  item && <img src={item}
                            alt="altmage"
                            onClick={this.openLightbox}
                            onKeyDown={this.openLightbox}
                            className="img-responsive"/> 
                  }
                </LazyLoad>
              )}
          </div>
        </div>
        {  
          item &&(
          <ImageGallery image={item} 
                        caption={userName}
                        lightboxIsOpen={lightboxIsOpen} 
                        closeLightbox={this.closeLightbox}>
          </ImageGallery>
        )}
      </div>
    );
  }

  openLightbox = () => {
    this.setState({lightboxIsOpen: true})
  }

  closeLightbox = () => {
    this.setState({lightboxIsOpen: false})
  }

}

ImageItem.propTypes = {
  item: PropTypes.string.isRequired,
  userName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ImageItem;
