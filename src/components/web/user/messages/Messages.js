import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="modal-content">
        <div className="modal-body no-padding">
          <div className="messages-left">
            <div className="title-wrapper">
              <div className="modal-title">{messages.title}</div>
              <div className="edit">
                <img src={images.edit} alt={"edit"} />
              </div>
            </div>
            <div className="messages-menu">
              <div className="menu-item">
                <img src={images.grey_person} alt={"gray_person1"} />
                <br />
                Subscribed
              </div>
              <div className="menu-item">
                <img src={images.grey_person} alt={"grey_person2"} />
                <br />
                Unknown
              </div>
              <div className="menu-item">
                <img src={images.grey_person} alt={"gray_person3"} />
                <br />
                Like you
              </div>
              <div className="menu-item">
                <img src={images.grey_person} alt={"grey_person4"} />
                <br />
                Companies
              </div>
            </div>
            <div className="user-chat-wrapper">
              {messages.messages.map((msg, index) => {
                return (
                  <div
                    className={!msg.read ? "chat-wrapper new" : "chat-wrapper"}
                    key={msg.index}
                  >
                    <div className="user-img">
                      <img src={images.image} alt={msg.index} />
                      <div className="username">{msg.userName}</div>
                      <div className="time">{msg.last_msg_detail.time}</div>
                      <div className="text">{msg.last_msg_detail.msg}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="messages-right">
            <div className="user-wrapper">
              <div className="user-img">
                <img src={images.image} alt={"image1"} />
              </div>
              <div className="username-wrapper">
                <span className="username">User name</span>
                <br />
                <span className="name">Name</span>
              </div>
              <div className="delete">
                <img src={images.bin} alt={"bin1"} />
              </div>
            </div>
            <div className="active-chat">
              <div className="date">Sunday</div>
              <div className="reply">
                This text is an example. This text is an example.
                <span className="time">09:45</span>
              </div>
              <div className="response">
                This text is an example. This text is an example. This text is
                an example. This text is an example.
                <span className="time">09:45</span>
              </div>
              <div className="date">Monday</div>
              <div className="reply">
                This text is an example. This text is an example.
                <span className="time">09:45</span>
              </div>
              <div className="response">
                This text is an example. This text is an example. This text is
                an example. This text is an example.
                <span className="time">09:45</span>
              </div>
            </div>
            <div className="write-chat">
              <textarea placeholder="Write a message… " />
              <img src={images.emoji} alt={"emoji1"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
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

export default Messages;
