import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";
import { Translations } from "../../../../lib/translations";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Messages",
      propsMsg: [
        {
          userName: "Sagar",
          read: false,
          msg_type: Translations.message_module.type.subscribed,
          last_msg_detail: {
            msg: "This thfghfg is an example. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text is hfghfan example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an examhfghfgple. This text is an example. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This text hfghfghfgis text is an example.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text is an exampgjfdjghfjjjhg. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Arpana",
          read: false,
          msg_type: Translations.message_module.type.subscribed,
          last_msg_detail: {
            msg: "This text jfghjghjkfghjgmple. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This jdfgjfghjan example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an exampjgdhjfghjexample. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This jgdhyjkmfgjample.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text jgdhyjmnfghjghjnexample. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Sachin",
          read: true,
          msg_type: Translations.message_module.type.unknown,
          last_msg_detail: {
            msg: "This text jdghyjmnghmhj. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "Thisjdghjkmghfjghj example.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text ijghjghfjghfjghjple. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This jghfjgfjfghjle.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text ijghjghjghe. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Ashwini",
          read: true,
          msg_type: Translations.message_module.type.unknown,
          last_msg_detail: {
            msg: "This text is anjghjfghjghhis text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text is jghfjgfmple.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text is an examkhjkhjkhjkThis text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This texjghyjkgjkhgmple.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text isjfghjfghjghjghfje. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Mahesh",
          read: true,
          msg_type: Translations.message_module.type.like_you,
          last_msg_detail: {
            msg: "This text is anjghfjghjghe. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text isjgfhjjghfn example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is anjghfjfghjghjexample. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "Thisjfghjfghjfghjan example.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text ijfghjfghjghfjgfhjfghple. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Rakesh",
          read: true,
          msg_type: Translations.message_module.type.like_you,
          last_msg_detail: {
            msg: "This text is ankghfkhjhjgkghj. This text is an example.",
            time: "09:50"
          },
          msg_details: [
            {
              msg: "Thijghfghjghfjfghjfgample.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an example.jdghjfghjfghjfghjf. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This tjgfhjfghjghjkghkljdfgjample.",
              time: "09:50",
              me: true
            },
            {
              msg: "This tjfghjghfjghfjfghjfghle. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Ramesh",
          read: true,
          msg_type: Translations.message_module.type.companies,
          last_msg_detail: {
            msg: "This text is an jghfjghfkhjfgkfhis text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This tfghjkfghjdfghjfghample.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text is ajghfjhfgjkfghjkfs text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This texghyjfghjfghjfghjgple.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text jghfjfghjfghjfghjfgh text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Raghu",
          read: true,
          msg_type: Translations.message_module.type.companies,
          last_msg_detail: {
            msg:
              "This text is an example. This text is an example. This text is an example. This text is an example.",
            time: "19:45"
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
      ],
      messages: [
        {
          userName: "Sagar",
          read: false,
          msg_type: Translations.message_module.type.subscribed,
          last_msg_detail: {
            msg: "This thfghfg is an example. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text is hfghfan example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an examhfghfgple. This text is an example. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This text hfghfghfgis text is an example.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text is an exampgjfdjghfjjjhg. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Arpana",
          read: false,
          msg_type: Translations.message_module.type.subscribed,
          last_msg_detail: {
            msg: "This text jfghjghjkfghjgmple. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This jdfgjfghjan example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an exampjgdhjfghjexample. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This jgdhyjkmfgjample.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text jgdhyjmnfghjghjnexample. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Sachin",
          read: true,
          msg_type: Translations.message_module.type.unknown,
          last_msg_detail: {
            msg: "This text jdghyjmnghmhj. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "Thisjdghjkmghfjghj example.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text ijghjghfjghfjghjple. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This jghfjgfjfghjle.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text ijghjghjghe. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Ashwini",
          read: true,
          msg_type: Translations.message_module.type.unknown,
          last_msg_detail: {
            msg: "This text is anjghjfghjghhis text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text is jghfjgfmple.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text is an examkhjkhjkhjkThis text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This texjghyjkgjkhgmple.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text isjfghjfghjghjghfje. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Mahesh",
          read: true,
          msg_type: Translations.message_module.type.like_you,
          last_msg_detail: {
            msg: "This text is anjghfjghjghe. This text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This text isjgfhjjghfn example.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is anjghfjfghjghjexample. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "Thisjfghjfghjfghjan example.",
              time: "09:50",
              me: true
            },
            {
              msg:
                "This text ijfghjfghjghfjgfhjfghple. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Rakesh",
          read: true,
          msg_type: Translations.message_module.type.like_you,
          last_msg_detail: {
            msg: "This text is ankghfkhjhjgkghj. This text is an example.",
            time: "09:50"
          },
          msg_details: [
            {
              msg: "Thijghfghjghfjfghjfgample.",
              time: "09:45",
              me: true
            },
            {
              msg:
                "This text is an example.jdghjfghjfghjfghjf. This text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This tjgfhjfghjghjkghkljdfgjample.",
              time: "09:50",
              me: true
            },
            {
              msg: "This tjfghjghfjghfjfghjfghle. This text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Ramesh",
          read: true,
          msg_type: Translations.message_module.type.companies,
          last_msg_detail: {
            msg: "This text is an jghfjghfkhjfgkfhis text is an example.",
            time: "09:45"
          },
          msg_details: [
            {
              msg: "This tfghjkfghjdfghjfghample.",
              time: "09:45",
              me: true
            },
            {
              msg: "This text is ajghfjhfgjkfghjkfs text is an example.",
              time: "09:47",
              me: false
            },
            {
              msg: "This texghyjfghjfghjfghjgple.",
              time: "09:50",
              me: true
            },
            {
              msg: "This text jghfjfghjfghjfghjfgh text is an example.",
              time: "09:52",
              me: false
            }
          ]
        },
        {
          userName: "Raghu",
          read: true,
          msg_type: Translations.message_module.type.companies,
          last_msg_detail: {
            msg:
              "This text is an example. This text is an example. This text is an example. This text is an example.",
            time: "19:45"
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
      ],
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

  handleOnKeyDown = () => {};

  render() {
    const { messages, chatData } = this.state;

    return (
      <div className="modal-content">
        <div className="modal-body no-padding">
          <div className="messages-left">
            <div className="title-wrapper">
              <div className="modal-title">{this.state.title}</div>
              <div className="edit">
                <img src={images.edit} alt={"edit"} />
              </div>
            </div>
            <div className="messages-menu">
              <div
                role="button"
                tabIndex="0"
                onKeyDown={this.handleOnKeyDown}
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
                role="button"
                tabIndex="0"
                onKeyDown={this.handleOnKeyDown}
                className={
                  this.state.activeIndex === "2"
                    ? "menu-item active "
                    : "menu-item"
                }
                onClick={this.handleTypeClick}
                data-id="0"
                data-value="Unknown"
              >
                <img src={images.grey_person} alt={"grey_person2"} />
                <br />
                Unknown
              </div>
              <div
                role="button"
                tabIndex="-1"
                onKeyDown={this.handleOnKeyDown}
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
                role="button"
                tabIndex="-1"
                onKeyDown={this.handleOnKeyDown}
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
                    role="button"
                    tabIndex={index}
                    className={!msg.read ? "chat-wrapper new" : "chat-wrapper"}
                    key={msg.userName}
                    data-id={""}
                    data-value={msg.userName}
                    onClick={this.handleChatClick}
                    onKeyDown={this.handleOnKeyDown}
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
              <div class="date">Sunday</div>
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
