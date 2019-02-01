import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import PropTypes from "prop-types";
import { Userpics } from "../../user";
import { connect } from "react-redux";

class PicsModal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { modalShow, handleModalHide, data } = this.props;

    return (
      <CustomBootstrapModal
        modalClassName={"modal fade create-campaign-modal user-pics-modal"}
        header={false}
        footer={false}
        closeBtn
        modalShow={modalShow}
        handleModalHide={this.props.handleModalHide}
        modalBodyContent={
          <Userpics handleModalHide={handleModalHide} picsData={data} />
        }
      />
    );
  }
}

PicsModal.propTypes = {
  modalShow: PropTypes.bool,
  handleModalHide: PropTypes.func,
  data: PropTypes.any
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicsModal);
