import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: {
        address: "",
        add_location: "",
        add_category: "",
        add_decription: ""
      }
    };
  }

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
        modalClassName={"modal fade upload-image-modal"}
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
          />
        }
      />
    );
  }
}

UploadModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default UploadModal;
