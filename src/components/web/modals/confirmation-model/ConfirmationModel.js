import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { ActionConfirmation } from "../../user/action-confirmation";
import PropTypes from "prop-types";
import { deactivateAccount } from "../../../../actions/privacy";
import { connect } from "react-redux";

class ConfirmationModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalInfoHide, handleModalHide, modalInfoMsg } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade action-confirmation-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalInfoShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={
          <ActionConfirmation
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfoMsg={modalInfoMsg}
            handleConfirmation={this.handleConfirmation}
          />
        }
      />
    );
  }

  handleConfirmation = value => {
    const paramData = { isActive: value };
    this.props.deactivateAccount(paramData).then(() => {
      if (
        this.props.profilePrivacyData.error &&
        this.props.profilePrivacyData.error.status === 400
      ) {
        console.log("error");
        // To Do - Call back to Modal call - with error status
      } else {
        console.log("Deactivate Accont");
        // To Do - Call back to Modal call - with success status
      }
    });
  };

}

const mapStateToProps = state => ({
  profilePrivacyData: state.profilePrivacyData
});

const mapDispatchToProps = {
  deactivateAccount
};

ConfirmationModal.propTypes = {
  deactivateAccount: PropTypes.func,
  handleModalHide: PropTypes.func,
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  modalInfoMsg: PropTypes.string,
  profilePrivacyData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationModal);
