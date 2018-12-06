import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {
        address: "",
        add_location: "",
        add_category: "",
        add_decription: "",
        image: null
      }
    };
  }

  handleUpload = image => {
    this.setState({ form: { ...this.state.form, image } });
  };

  handleSetState = (value, cd) => {
    this.setState({ form: { ...this.state.form, add_decription: value } }, () =>
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
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func
};

export default UploadModal;
