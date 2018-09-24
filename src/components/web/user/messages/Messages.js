import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propsMsg: this.props.messages.messages,
      messages: this.props.messages.messages,
      activeIndex: "1",
      chatData: []
    };
  }

  componentWillMount() {
    let messages = this.state.propsMsg;
    messages = messages.filter(msg => msg.msg_type === "Subscribed");
    this.setState({ messages });

    let chatData = this.state.propsMsg;
    chatData = chatData.filter(msg => msg.userName === "Sagar");
    this.setState({ chatData });
  }

  handleTypeClick = e => {
    this.setState({ activeIndex: e.currentTarget.dataset.id });
    let messages = this.state.propsMsg;
    messages = messages.filter(
      msg => msg.msg_type === e.currentTarget.dataset.value
    );
    this.setState({ messages });
  };

  handleChatClick = e => {
    let chatData = this.state.propsMsg;
    chatData = chatData.filter(
      msg => msg.userName === e.currentTarget.dataset.value
    );
    this.setState({ chatData });
  };

  render() {
    const { messages, chatData } = this.state;
    console.log(chatData);

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
              <div
                className={
                  this.state.activeIndex === "1"
                    ? "menu-item active"
                    : "menu-item"
                }
                onClick={this.handleTypeClick}
                data-id="1"
                data-value="Subscribed"
              >
                <img src={images.grey_person} alt={"gray_person1"} />
                <br />
                Subscribed
              </div>
              <div
                className={
                  this.state.activeIndex === "2"
                    ? "menu-item active "
                    : "menu-item"
                }
                onClick={this.handleTypeClick}
                data-id="2"
                data-value="Unknown"
              >
                <img src={images.grey_person} alt={"grey_person2"} />
                <br />
                Unknown
              </div>
              <div
                className={
                  this.state.activeIndex === "3"
                    ? "menu-item active"
                    : "menu-item"
                }
                onClick={this.handleTypeClick}
                data-id="3"
                data-value="Like you"
              >
                <img src={images.grey_person} alt={"gray_person3"} />
                <br />
                Like you
              </div>
              <div
                className={
                  this.state.activeIndex === "4"
                    ? "menu-item active"
                    : "menu-item"
                }
                onClick={this.handleTypeClick}
                data-id="4"
                data-value="Companies"
              >
                <img src={images.grey_person} alt={"grey_person4"} />
                <br />
                Companies
              </div>
            </div>
            <div className="user-chat-wrapper">
              {messages.map((msg, index) => {
                return (
                  <div
                    className={!msg.read ? "chat-wrapper new" : "chat-wrapper"}
                    key={index}
                    data-id={""}
                    data-value={msg.userName}
                    onClick={this.handleChatClick}
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
                <span className="name">{chatData[0].userName}</span>
              </div>
              <div className="delete">
                <img src={images.bin} alt={"bin1"} />
              </div>
            </div>

            <div className="active-chat">
              {chatData[0].msg_details.map((cdmsg, index) => {
                return (
                  <div key={index}>
                    {cdmsg.me && (
                      <div className="reply">
                        {cdmsg.msg}
                        <span className="time">{cdmsg.time}</span>
                      </div>
                    )}
                    {!cdmsg.me && (
                      <div className="response">
                        {cdmsg.msg}
                        <span className="time">{cdmsg.time}</span>
                      </div>
                    )}
                  </div>
                );
              })}
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

export default Messages;
