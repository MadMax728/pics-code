import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const MRightActiveChat = (
    { 
        items,
        date,
        me,
        handleMessageClick
    }) => {
        const renderMessages = () => {
            return items.map((item, key) => (
                <div key={item.id}>
                    { me === item.senderId && (
                        <div className="reply"
                            role="presentation"
                            onKeyPress={handleMessageClick}
                            onClick={handleMessageClick}>
                             { item.content }
                             <span className="time">{ item.createdAt }</span>
                        </div>
                    )}

                     { me !== item.senderId && (
                        <div className="response"
                            role="presentation"
                            onKeyPress={handleMessageClick}
                            onClick={handleMessageClick}>
                             { item.content }
                             <span className="time">{ item.createdAt }</span>
                        </div>
                    )}
                </div>
            ));
        };
        return (
            <div className={classnames("active-chat", { 'nochat' : items.length === 0 })}>
                <div className="date">{ date }</div>
                {
                        items && items.length ? (
                            renderMessages()
                        ) : 'You are ready to chat'
                }
            </div>
        )
};


MRightActiveChat.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          content: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
          recipientId: PropTypes.string,
          senderId: PropTypes.string,
        })
    ),
    handleMessageClick: PropTypes.func,
    date: PropTypes.string.isRequired,
    me: PropTypes.string.isRequired,
};
  
export default MRightActiveChat;
  