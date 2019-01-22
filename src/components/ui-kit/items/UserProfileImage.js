import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';
import ImageGallery from "./ImageGallery";

class UserProfileImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
    }
  }

  render() {
    const { item, userName } = this.props;
    const { lightboxIsOpen } = this.state;
    return (
        <div className="user-image bg-white no-padding">
            <LazyLoad height={75} once offset={[-75, 0]}>
                {  item &&  <img
                            src={item}
                            onClick={this.openLightbox}
                            onKeyDown={this.openLightbox}
                            width="100%"
                            alt="profile"/>
                }
            </LazyLoad>
            {  
            item && (
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

UserProfileImage.propTypes = {
  item: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

export default UserProfileImage;
