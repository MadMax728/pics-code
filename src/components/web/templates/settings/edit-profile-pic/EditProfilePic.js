import React, { Component } from "react";
import propTypes from "prop-types";
import { ImageCropper } from "../../../../ui-kit";

class EditProfilePic extends Component {
  constructor(props, context) {
    super(props, context);
    this.imageCrop = React.createRef();
  }

  handleSave = () => {
    this.imageCrop.current.handleSave();
  };

  render() {
    const { image, handleEditImage, handleActualImg, handleScale } = this.props;

    return (
      <div className="col-xs-12 upload-profile-wrapr padding-b-25">
        <ImageCropper
          image={image}
          handleEditImage={handleEditImage}
          isCircle
          ref={this.imageCrop}
          handleActualImg={handleActualImg}
          handleScale={handleScale}
        />
      </div>
    );
  }
}

EditProfilePic.propTypes = {
  image: propTypes.any,
  handleEditImage: propTypes.func,
  handleActualImg: propTypes.any,
  handleScale: propTypes.any
};

export default EditProfilePic;
