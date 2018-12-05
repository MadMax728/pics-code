import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";
import { uploadMedia } from "../../../../actions/media";
import connect from "react-redux/es/connect/connect";

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {
        address: "",
        add_location: "",
        add_category: "dummy",
        add_decription: "",
        image: null,
        file:null
      }
    };
  } 

  handleUpload = (image, file) => {
    this.setState({ form: { ...this.state.form, image,file } });
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, add_decription: value } }, () =>
      cd()
    );
  };

  handleContinue = () => {
    const { form } = this.state; 
    const Data = new FormData();
    Data.set('title', '');
    Data.set('description', form.add_decription);
    Data.append('image', form.file);
    Data.set('postType', 'mediapost');
    Data.set('location', form.add_location);

    this.props.uploadMedia(Data).then(() => {
      this.props.handleModalHide();

      this.setState({
        form: {
          address: "",
          add_location: "",
          add_category: "dummy",
          add_decription: "",
          image: null,
          file:null
        }
      });
    });
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  handleLocation = (location, address) => {
    this.setState({
      form: { ...this.state.form, add_location: location, address }
    });
  };

  render() {
    const { form } = this.state;

    return (
      <CustomBootstrapModal
        modalClassName={"modal fade upload-image-modal create-campaign-modal"}
        header
        modalHeaderContent={
          <UploadHeader
            handleModalHide={this.props.handleModalHide}
            handleContinue={this.handleContinue}
          />
        }
        footer={false}
        closeBtn={false}
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={
          <Upload
            handleChangeField={this.handleChangeField}
            form={form}
            handleSetState={this.handleSetState}
            handleLocation={this.handleLocation}
            handleUpload={this.handleUpload}
          />
        }
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func,
  uploadMedia: propTypes.func
};

const mapStateToProps = state => ({
  media: state.mediaData  
});

const mapDispatchToProps = {
  uploadMedia
};

// export default UploadModal;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal);
