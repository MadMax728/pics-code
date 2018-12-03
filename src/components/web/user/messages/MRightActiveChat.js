import React from "react";
import propTypes from "prop-types";
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
    items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string,
          content: propTypes.string,
          createdAt: propTypes.string,
          updatedAt: propTypes.string,
          recipientId: propTypes.string,
          senderId: propTypes.string,
        })
    ),
    handleMessageClick: propTypes.func,
    date: propTypes.string.isRequired,
    me: propTypes.string.isRequired,
};
  
export default MRightActiveChat;
  