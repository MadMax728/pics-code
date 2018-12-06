import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import {
  EditProfilePic,
  EditProfilePicHeader
} from "../../../web/templates/settings/edit-profile-pic";
import { uploadProfilePicture } from "../../../../actions/profile";
import connect from "react-redux/es/connect/connect";

class EditProfileModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.imageCropper = React.createRef();
    this.state = {
      image: null,
      actual_img: null,
      scale: 1
    };
  }

  componentDidMount = () => {
    this.setState({ image: this.props.image });
  };

  handleActualImg = actual_img => {
    this.setState({ actual_img });
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleEditImage = image => {
    this.setState({ image });
    this.props.handleEditImage(image);
  };

  b64toBlob = (b64Data, contentType, sliceSize) => {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;

      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);

          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
      }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  handleContinue = () => {
    const Data = new FormData();
    Data.append('image',this.state.actual_img);
    Data.append('typeImage','Original');
    Data.append('typeOfContent','profile');
    Data.append('coordinate', '50');
    this.props.uploadProfilePicture(Data)
      .then(()=>{
        if (this.props.userDataByUsername.imageData)
        {
          // convert Base64 data
          // https://ourcodeworld.com/articles/read/322/how-to-convert-a-base64-image-into-a-image-file-and-upload-it-with-an-asynchronous-form-using-jquery

          const ImageURL = this.state.image;
          // Split the base64 string in data and contentType
          const block = ImageURL.split(";");
          // Get the content type of the image
          const contentType = block[0].split(":")[1];// In this case "image/gif"
          // get the real base64 content of the file
          const realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

          // Convert it to a blob to upload
          const blob = this.b64toBlob(realData, contentType);

          const CropedData = new FormData();
          CropedData.append('image',blob);
          CropedData.append('typeImage','Crop');
          CropedData.append('typeOfContent','profile');
          CropedData.append('coordinate', '50');
          this.props.uploadProfilePicture(CropedData)
            .then(()=>{
              if (this.props.userDataByUsername.imageData)
              {
                const { imageData } = this.props.userDataByUsername;
                if (imageData && imageData.data && imageData.data.id) {
                this.props.handleProfile(this.props.userDataByUsername.imageData.data.id);
                this.imageCropper.current.handleSave();
                this.props.handleModalInfoHide();
                }  
              }
            })
        }

      })
  };

  render() {
    const { handleModalInfoHide, modalInfoShow, handleEditImage } = this.props;
    const { image } = this.state;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade create-campaign-modal"}
        header
        modalHeaderContent={
          <EditProfilePicHeader
            handleModalHide={this.props.handleModalInfoHide}
            handleContinue={this.handleContinue}
          />
        }
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={
          <EditProfilePic
            image={image}
            handleEditImage={this.handleEditImage}
            ref={this.imageCropper}
            handleActualImg={this.handleActualImg}
            handleScale={this.handleScale}
          />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  uploadProfilePicture
};

EditProfileModal.propTypes = {
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  handleEditImage: PropTypes.func,
  image: PropTypes.any,
  uploadProfilePicture: PropTypes.any,
  handleProfile: PropTypes.func,
  userDataByUsername: PropTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileModal);
