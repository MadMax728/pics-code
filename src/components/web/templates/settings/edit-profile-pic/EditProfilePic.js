import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditProfileCrop } from "../../../../ui-kit";
import * as images from "../../../../../lib/constants/images";

class EditProfilePic extends Component {
  constructor(props, context) {
    super(props, context);
    this.imageCrop = React.createRef();
  }

  render() {
    const {
      image,
      handleEditImage,
      handleActualImg,
      handleScale,
      handleUpload
    } = this.props;
    return (
      <div className="col-xs-12 no-padding">
      <div className="col-sm-12 upload-form">
      <div className="col-xs-12 no-padding create-campaign-crop-pic">
      <div className="col-xs-12 uploaded-profile-pic mar0padd0">
        <div>
          <EditProfileCrop
            image={image}
            handleEditImage={handleEditImage}
            isCircle
            ref={this.imageCrop}
            handleActualImg={handleActualImg}
            handleScale={handleScale}
          />
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleSave = () => {
    this.imageCrop.current.handleSave();
  };
}

EditProfilePic.propTypes = {
  image: PropTypes.any,
  handleEditImage: PropTypes.func,
  handleActualImg: PropTypes.any,
  handleScale: PropTypes.any,
  handleUpload: PropTypes.func
};

export default EditProfilePic;
