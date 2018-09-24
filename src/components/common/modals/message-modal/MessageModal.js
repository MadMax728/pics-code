import React, { Component } from "react";
import { ModalUi } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import propTypes from "prop-types";

const message_modal_details = {
  header: false,
  headerName: "",
  closeBtn: true,
  title: Translations.message_module.name,
  msg_type: Translations.message_module.type.subscribed,
  messages: [
    {
      userName: "Sagar",
      read: false,
      last_msg_detail: {
        msg:
          "This text is an example. This text is an example. This text is an example. This text is an example.",
        time: "09:45"
      },
      msg_details: [
        {
          msg: "This text is an example. This text is an example.",
          time: "09:45",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:47",
          me: false
        },
        {
          msg: "This text is an example. This text is an example.",
          time: "09:50",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:52",
          me: false
        }
      ]
    },
    {
      userName: "Sachin",
      read: true,
      last_msg_detail: {
        msg:
          "This text is an example. This text is an example. This text is an example. This text is an example.",
        time: "09:45"
      },
      msg_details: [
        {
          msg: "This text is an example. This text is an example.",
          time: "09:45",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:47",
          me: false
        },
        {
          msg: "This text is an example. This text is an example.",
          time: "09:50",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:52",
          me: false
        }
      ]
    },
    {
      userName: "Mahesh",
      read: true,
      last_msg_detail: {
        msg:
          "This text is an example. This text is an example. This text is an example. This text is an example.",
        time: "09:45"
      },
      msg_details: [
        {
          msg: "This text is an example. This text is an example.",
          time: "09:45",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:47",
          me: false
        },
        {
          msg: "This text is an example. This text is an example.",
          time: "09:50",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:52",
          me: false
        }
      ]
    },
    {
      userName: "Ramesh",
      read: true,
      last_msg_detail: {
        msg:
          "This text is an example. This text is an example. This text is an example. This text is an example.",
        time: "09:45"
      },
      msg_details: [
        {
          msg: "This text is an example. This text is an example.",
          time: "09:45",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:47",
          me: false
        },
        {
          msg: "This text is an example. This text is an example.",
          time: "09:50",
          me: true
        },
        {
          msg:
            "This text is an example. This text is an example. This text is an example. This text is an example.",
          time: "09:52",
          me: false
        }
      ]
    }
  ]
};

class MessageModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <ModalUi
        modalShow={this.props.modalShow}
        handleModalHide={this.props.handleModalHide}
        messages={message_modal_details}
      />
    );
  }
}

MessageModal.propTypes = {
  modalShow: propTypes.bool,
  handleModalHide: propTypes.func
};

export default MessageModal;
