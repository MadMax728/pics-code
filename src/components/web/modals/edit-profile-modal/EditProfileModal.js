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
    // Data.append('typeImage','Original');
    // Data.append('typeOfContent','profile');
    // Data.append('coordinate', '50');

    // axios({
    //   method: 'post',
    //   url: 'http://picstagraph-backend-dev2.us-east-1.elasticbeanstalk.com/api/profile',
    //   data:Data,
    //   config: { headers: {'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhkYjk2ZjMxLTZjNDctNDg1YS1iMjM5LTU4N2JjOWJkZmMwNiIsInVzZXJuYW1lIjoidmlzaGFsMSIsImVtYWlsIjoidmlzaGFsLnJhdXQxQGdtYWlsLmNvbSIsImRhdGVJc3N1ZWQiOiIyMDE4LTExLTMwVDA1OjEyOjQ5LjU1N1oiLCJsYW5ndWFnZSI6IkVuZ2xpc2giLCJpYXQiOjE1NDM1NTQ3NjksImV4cCI6Mjc1MzE1NDc2OX0.xHEebypOaplj6Q6rOqd5b71HJ-IBOPN6jhVzWwCriaY' }}
    // }).then((res)=>{
    //   console.log("test",res)
    // })

    // let data = {
    //    'content':Data
    //  }

    
    let data = {
      image: this.state.actual_img,
      typeImage: 'Original',
    }
    console.log(data);

    this.props.uploadProfilePicture(data)
      .then(()=>{
        console.log("data", this.props.userDataByUsername);
      })

    // console.log("scale", this.props.image);
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
  image: propTypes.any,
  uploadProfilePicture: propTypes.any,
  userDataByUsername: propTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileModal);
