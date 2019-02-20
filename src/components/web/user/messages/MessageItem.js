import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import { DateFormat } from "../../../Factory";
import classnames from "classnames";

const MessageItem = (
    { 
        item,
        me,
        handleMessageClick
    }) => {
        const messageItem = classnames({
            "reply": me === item.senderId,
            "response": me !== item.senderId,
        });
        return (
            <div className={messageItem}
                    role="presentation"
                    onKeyPress={handleMessageClick}
                    onClick={handleMessageClick}>
                    { item.content }
                    <span className="time">{ DateFormat(item.createdAt, Translations.date_format.time, true) }</span>
            </div>
        )
};


MessageItem.propTypes = {
    item: PropTypes.shape({
          id: PropTypes.string,
          content: PropTypes.any,
          createdAt: PropTypes.any,
          updatedAt: PropTypes.any,
          recipientId: PropTypes.any,
          senderId: PropTypes.any,
    }),
    handleMessageClick: PropTypes.func,
    me: PropTypes.string.isRequired,
};
  
export default MessageItem;
  