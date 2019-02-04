import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Upload, UploadHeader } from "../../user";
import {
  uploadMedia,
  addParticipants,
  getCampaignDetails
} from "../../../../actions";
import { connect } from "react-redux";
import { modalType } from "../../../../lib/constants/enumerations";

const initialState = {
  form: {
    add_location: {
      latitude: "",
      longitude: "",
      address: ""
    },
    add_category: "",
    add_description: "",
    is_advertise_label: false,
    image: null,
    file: null,
    video: null,
    filetype: true,
    error: false
  }
};

class UploadModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }

  render() {
    const { form } = this.state;
    const { modalShow } = this.props;

    return (
      <CustomBootstrapModal
        modalClassName={"modal fade upload-image-modal upload-pic-modal create-campaign-modal"}
        header
        modalHeaderContent={
          <UploadHeader
            handleModalHide={this.handleModalHide}
            handleContinue={this.handleContinue}
            handleResetForm={this.handleResetForm}
          />
        }
        footer={false}
        closeBtn={false}
        modalShow={modalShow}
        handleModalHide={this.handleModalHide}
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

  handleResetForm = () => {
    const { form } = this.state;
    form.add_location = {};
    form.add_location.latitude = "";
    form.add_location.longitude = "";
    form.add_location.address = "";
    form.add_category = "";
    form.add_description = "";
    form.is_advertise_label = false;
    form.image = null;
    form.file = null;
    form.video = null;
    form.filetype = true;
    form.error = false;
    this.setState({ form });
  };
  componentWillUnmount = () => {
    this.setState(initialState);
  };

  handleUpload = (imageVideo, file, filetype) => {
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
    if (this.validateForm()) {
      const { form } = this.state;
      const Data = new FormData();
      if (form.file) {
        Data.append("description", form.add_description);
        Data.append("isAdvertiseLabel", form.is_advertise_label);
        Data.append("category", form.add_category);
        if (form.filetype) {
          Data.append("image", form.file);
        } else {
          Data.append("video", form.file);
        }
        Data.append("postType", "mediapost");
        Data.append("location", JSON.stringify(form.add_location));
        this.props.uploadMedia(Data, form.filetype).then(() => {
          this.setState(initialState);
          /* Add Participants */
          if (this.props.data) {
            let typeOfContent = "";
            if (form.filetype) {
              typeOfContent = "Image";
            } else {
              typeOfContent = "Video";
            }
            const participantFormData = {
              campaignId: this.props.data.campaignId,
              campaignName: this.props.data.campaignName,
              title: this.props.data.campaignName,
              typeId: this.props.mediaData.media.id,
              typeContent: typeOfContent,
              description: form.add_description,
              category: form.add_category,
              campaignCreatedBy: this.props.data.campaignCreatedById
            };
            this.props.addParticipants(participantFormData).then(() => {
              if (
                this.props.campaignData &&
                this.props.campaignData.isAddParticipant
              ) {
                console.log("participant added");
                const data = { id: this.props.data.campaignId };
                this.props.getCampaignDetails(data);
              }
            });
          }
          this.props.handleModalHide();
        });

        this.setState({
          form: { ...this.state.form, error: false }
        });
      } else {
        this.setState({
          form: { ...this.state.form, error: true }
        });
        this.props.handleModalInfoMsgShow(
          modalType.error,
          "Please Select Image or Video"
        );
      }
    } else {
      this.setState({
        form: { ...this.state.form, error: true }
      });
      this.props.handleModalInfoMsgShow(
        modalType.error,
        "Please Fill proper Data"
      );
    }
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
    form.add_location.latitude = location.lat;
    form.add_location.longitude = location.lng;
    form.add_location.address = address;
    this.setState({ form });
  };

  handleSelect = (isFor, selected) => {
    const { form } = this.state;
    form.add_category = selected;
    this.setState({ form });
  };

  handleModalHide = () => {
    this.setState(initialState);
    this.props.handleModalHide();
  };

  validateForm = () => {
    const { form } = this.state;
    return (
      form.add_category &&
      form.add_location.latitude &&
      form.add_location.longitude &&
      form.add_location.address &&
      form.add_description
    );
  };
}

UploadModal.propTypes = {
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func,
  uploadMedia: PropTypes.func,
  handleModalInfoMsgShow: PropTypes.func,
  data: PropTypes.any,
  addParticipants: PropTypes.func,
  campaignData: PropTypes.any,
  getCampaignDetails: PropTypes.func,
  mediaData: PropTypes.any
};

const mapStateToProps = state => ({
  campaignData: state.campaignData,
  mediaData: state.mediaData
});

const mapDispatchToProps = {
  uploadMedia,
  addParticipants,
  getCampaignDetails
};

// export default UploadModal;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal);
