import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Lightbox from 'react-images';

class ImageGallery extends PureComponent {

  render() {
    const { lightboxIsOpen, image, caption, closeLightbox } = this.props;
    return (
        <Lightbox
            images={[{ src : image, caption: caption }]}
            isOpen={lightboxIsOpen}
            onClose={closeLightbox}
        />
    );
  }
}

ImageGallery.propTypes = {
    image: PropTypes.string.isRequired,
    lightboxIsOpen: PropTypes.bool,
    caption: PropTypes.string,
    closeLightbox: PropTypes.func.isRequired
};

export default ImageGallery;
