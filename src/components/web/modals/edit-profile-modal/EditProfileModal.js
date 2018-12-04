import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
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
    console.log("ac", actual_img);
    this.setState({ actual_img });
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleContinue = () => {
    let Data = new FormData();
    Data.append('image',this.state.actual_img);
    Data.append('typeImage','Original');
    Data.append('typeOfContent','profile');
    Data.append('coordinate', '50');
    this.props.uploadProfilePicture(Data)
      .then(()=>{
        if (this.props.userDataByUsername.imageData)
        {
          this.props.handleProfile(this.props.userDataByUsername.imageData.data.id);
          this.imageCropper.current.handleSave();
          this.props.handleModalInfoHide();  
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
            handleEditImage={handleEditImage}
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
  handleModalInfoHide: propTypes.func,
  modalInfoShow: propTypes.bool,
  handleEditImage: propTypes.func,
  image: propTypes.any,
  uploadProfilePicture: propTypes.any,
  userDataByUsername: propTypes.any,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileModal);
