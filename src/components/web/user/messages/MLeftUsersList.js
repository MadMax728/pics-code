import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import MLeftUserItem from "./MLeftUserItem";
import { Translations } from "../../../../lib/translations";

class MLeftUsersList extends Component {
  render() {
    const { items, handleChatClick } = this.props;

    const latestUserList = () => {
      return items.map((item, key) => (
        <div
          role="button"
          tabIndex={key}
          className={classnames("chat-wrapper", {
            new: !item.read
          })}
          key={item.id}
          data-id={item.id}
          data-value={item.username}
          onClick={handleChatClick}
          onKeyDown={handleChatClick}
          ref={el => {
            this.messagesEnd = el;
          }}
        >
          <MLeftUserItem key={key} item={item} message={item.lastMessage} />
        </div>
      ));
    };
    return (
      <div className="user-chat-wrapper">
        {items && items.length ? (
          latestUserList()
        ) : (
          <div className="card">{Translations.message_module.no_msg}</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    const username = "marc1";
    if (username === "marc1") {
      this.scrollBottomOnNewMessage(username);
    }
  }

  scrollBottomOnNewMessage = username => {
    // console.log(username);
    // let data = "user_" + username;
    // console.log(this.data);
    console.log(this.messagesEnd);
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };
}

MLeftUsersList.propTypes = {
  handleChatClick: PropTypes.func,
  items: PropTypes.any
};

export default MLeftUsersList;
