import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import { Subscribe } from "../../user";
import PropTypes from "prop-types";
import { deactivateAccount } from "../../../../actions/privacy";
import { connect } from "react-redux";
import * as routes from "../../../../lib/constants/routes";

class SubscribeModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { handleModalHide, handleModalConfirmation } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade action-confirmation-modal subscribe-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalShow}
        closeBtn={true}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={
          <Subscribe
            handleModalHide={handleModalHide}
            isFor={this.props.data.type}
            userId={this.props.data.userid}
          />
        }
      />
    );
  }

  handleConfirmation = value => {
    const paramData = { isActive: value };
    console.log(paramData);
    if (this.props.data.id === "deactivateAccount") {
      this.props.deactivateAccount(paramData).then(() => {
        if (
          this.props.profilePrivacyData.error &&
          this.props.profilePrivacyData.error.status === 400
        ) {
          console.log("error");
          // To Do - Call back to Modal call - with error status
        } else {
          this.props.history.push(routes.LOGOUT_ROUTE);
          // To Do - Call back to Modal call - with success status
        }
      });
    } else {
      console.log("delete History");
    }
  };
}

const mapStateToProps = state => ({
  profilePrivacyData: state.profilePrivacyData
});

const mapDispatchToProps = {
  deactivateAccount
};

SubscribeModal.propTypes = {
  deactivateAccount: PropTypes.func,
  handleModalHide: PropTypes.func,
  handleModalConfirmation: PropTypes.func,
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  modalInfoMsg: PropTypes.string,
  profilePrivacyData: PropTypes.any,
  history: PropTypes.any,
  handleModalShow: PropTypes.any,
  modalShow: PropTypes.any,
  data: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeModal);
