import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Subscribe } from "../../user";

class SubscribeModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    console.log(this.props);
  }

  render() {
    const { handleModalInfoHide, handleModalHide, modalInfoMsg } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade payment-confirmation-modal"}
        header={false}
        footer={false}
        modalShow={this.props.modalInfoShow}
        closeBtn={false}
        handleModalHide={this.props.handleModalInfoHide}
        modalBodyContent={
          <Subscribe
            handleModalInfoHide={handleModalInfoHide}
            handleModalHide={handleModalHide}
            modalInfoMsg={modalInfoMsg}
          />
        }
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

SubscribeModal.propTypes = {
  handleModalHide: PropTypes.func,
  handleModalInfoHide: PropTypes.func,
  modalInfoShow: PropTypes.bool,
  modalInfoMsg: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeModal);
