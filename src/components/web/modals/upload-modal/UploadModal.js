import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";

const initialState = {
  form: {
    add_location: {
      lat: "",
      lng: "",
      address: "",
    },
    add_category: "",
    add_description: "",
    image: null,
    video: null
  }
};
class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  handleUpload = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, add_description: value } }, () =>
      cd()
    );
  };

  handleContinue = () => {
    console.log(this.state.form);
  };

  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleLocation = (location, address) => {
    const { form } = this.state;
    form.add_location.lat = location.lat
    form.add_location.lng = location.lng
    form.add_location.address = address;
    this.setState({ form });
  };

  handleSelect = (isFor , selected) => {
    const { form } = this.state;
    form.add_category = selected;
    this.setState({ form });
  }

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
  handleModalHide: PropTypes.func
};

export default UploadModal;
