import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Messages } from "../../web/user/messages";
import propTypes from "prop-types";

class ModalUi extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { messages } = this.props;
    return (
      <Modal
        show={this.props.modalShow}
        onHide={this.props.handleModalHide}
        container={this}
        aria-labelledby="contained-modal-title"
        className="modal fade messages-modal"
      >
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
    msg_type: propTypes.string,
    messages: propTypes.arrayOf(
      propTypes.shape({
        userName: propTypes.string,
        read: propTypes.bool,
        last_msg_detail: propTypes.shape({
          msg: propTypes.string,
          time: propTypes.string
        }),
        msg_details: propTypes.arrayOf(
          propTypes.arrayOf({
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
