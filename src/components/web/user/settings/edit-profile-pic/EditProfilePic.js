import React, { Component } from "react";
import propTypes from "prop-types";
import { ImageCropper } from "../../../../ui-kit";

class EditProfilePic extends Component {
  render() {
    const { image, handleEditImage } = this.props;

    return (
      <div className="col-xs-12 upload-profile-wrapr padding-b-25">
        <ImageCropper image={image} handleEditImage={handleEditImage} />
      </div>
    );
  }
}

EditProfilePic.propTypes = {
  image: propTypes.any,
  handleEditImage: propTypes.func
};

export default EditProfilePic;
