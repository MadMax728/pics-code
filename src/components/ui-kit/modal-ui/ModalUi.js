import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Messages } from "../../web/user/messages";
import propTypes from "prop-types";
import * as images from "../../../lib/constants/images";

class ModalUi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { messages } = this.props;
    console.log(messages.closeBtn);

    return (
      <Modal
        show={this.props.modalShow}
        onHide={this.props.handleModalHide}
        container={this}
        aria-labelledby="contained-modal-title"
        className="modal fade messages-modal"
      >
        {messages.closeBtn && (
          <button onClick={this.props.handleModalHide} className={"closeBtn"}>
            <img
              src={images.cross}
              alt={"cross"}
              style={{ height: "10px", width: "10px" }}
            />
          </button>
        )}
        <Messages messages={messages} />
      </Modal>
    );
  }
}

ModalUi.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func,
  messages: propTypes.shape({
    header: propTypes.bool,
    headerName: propTypes.string,
    closeBtn: propTypes.bool,
    title: propTypes.string,
    messages: propTypes.arrayOf(
      propTypes.shape({
        userName: propTypes.string,
        read: propTypes.bool,
        msg_type: propTypes.string,
        last_msg_detail: propTypes.shape({
          msg: propTypes.string,
          time: propTypes.string
        }),
        msg_details: propTypes.arrayOf(
          propTypes.shape({
            msg: propTypes.string,
            time: propTypes.string,
            me: propTypes.bool
          })
        )
      })
    )
  })
};

export default ModalUi;
