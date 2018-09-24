import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Messages, Upload } from "../../web/user";
import propTypes from "prop-types";
import * as images from "../../../lib/constants/images";

class ModalUi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { data, modalFor } = this.props;

    return (
      <Modal
        show={this.props.modalShow}
        onHide={this.props.handleModalHide}
        container={this}
        aria-labelledby="contained-modal-title"
        className="modal fade messages-modal"
      >
        {data.closeBtn &&
          modalFor === "Messages" && (
            <button onClick={this.props.handleModalHide} className={"closeBtn"}>
              <img
                src={images.cross}
                alt={"cross"}
                style={{ height: "10px", width: "10px" }}
              />
            </button>
          )}

        {data.header &&
          modalFor === "Upload" && (
            <Modal.Header>
              <Modal.Title>{data.headerName}</Modal.Title>
            </Modal.Header>
          )}

        {modalFor === "Messages" && <Messages />}

        {modalFor === "Upload" && <Upload />}
      </Modal>
    );
  }
}

ModalUi.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func,
  modalFor: propTypes.string,
  data: propTypes.shape({
    header: propTypes.bool,
    headerName: propTypes.string,
    closeBtn: propTypes.bool
  })
};

export default ModalUi;
