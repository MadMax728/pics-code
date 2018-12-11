import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";
import { uploadMedia } from "../../../../actions/media";
import connect from "react-redux/es/connect/connect";

const initialState = {
  form: {
    add_location: {
      lat: "",
      lng: "",
      address: ""
    },
    add_category: "",
    add_description: "",
    is_advertise_label: false,
    image: null,
    file: null,
    video: null,
    filetype: true
  }
};
class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  handleUpload = (imageVideo, file, filetype) => {
    console.log(imageVideo);
    console.log(file);
    console.log(filetype);

    if (filetype) {
      this.setState({
        form: { ...this.state.form, image: imageVideo, file, filetype }
      });
    } else {
      this.setState({
        form: { ...this.state.form, video: imageVideo, file, filetype }
      });
    }
  };

  handleSetState = (value, cd) => {
    this.setState(
      {
        form: {
          ...this.state.form,
          add_description: value
        }
      },
      () => cd()
    );
  };

  handleContinue = () => {
    const { form } = this.state;
    const Data = new FormData();
    Data.set("title", "");
    Data.set("description", form.add_decription);
    Data.set("isAdvertiseLabel", form.is_advertise_label);
    Data.append("image", form.file);
    Data.set("postType", "mediapost");
    Data.set("location", form.add_location);

    this.props.uploadMedia(Data).then(() => {
      this.props.handleModalHide();
      this.setState({ initialState });
    });
  };

  handleChangeField = event => {
    const { form } = this.state;
    if (event.target.type === "checkbox") {
      form[event.target.name] = event.target.checked;
    } else {
      form[event.target.name] = event.target.value;
    }
    this.setState({ form });
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.add_location.lat = location.lat;
    form.add_location.lng = location.lng;
    form.add_location.address = address;
    this.setState({ form });
  };

  handleSelect = (isFor, selected) => {
    const { form } = this.state;
    form.add_category = selected;
    this.setState({ form });
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
            handleSelect={this.handleSelect}
          />
        }
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func,
  uploadMedia: PropTypes.func
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
