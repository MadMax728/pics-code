import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  EditProfilePic,
  EditProfilePicHeader
} from "../../../web/templates/settings/edit-profile-pic";
import { uploadProfilePicture } from "../../../../actions/profile";
import axios from "axios";
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
    // let Data = new FormData();
    // Data.append('avatar',this.state.actual_img);
    // Data.append('typeImage','Crop');
    // Data.append('typeOfContent','profile');
    // Data.append('coordinate', '50');

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3146/api/images',
    //   data:Data,
    //   config: { headers: {'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw' }}
    // }).then((res)=>{
    //   console.log("test",res)
    // })

    // let data = {
    //    'content':Data
    //  }

    // let data = {
    //   avatar: this.state.actual_img,
    //   typeImage: 'Crop',
    //   typeOfContent: 'profile',
    //   coordinate: 50
    // }
    // this.props.uploadProfilePicture(data)
    //   .then(()=>{
    //     console.log("data", this.props.userDataByUsername);
    //   })

    console.log("scale", this.props.image);
    this.imageCropper.current.handleSave();

    this.props.handleModalInfoHide();
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
  image: propTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileModal);
