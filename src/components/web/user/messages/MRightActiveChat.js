import React from "react";
import PropTypes from "prop-types";

const MRightActiveChat = (
    { 
        items,
        user,
        me,
        handleMessageClick
    }) => {
        const renderMessages = () => {
            
            if(!items || !items.length){
                return '';
            }

            return items.map((item) => (
                <div key={item.id}> 
                    <div className="date">{ item.date }</div>
                    <div>
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
                </div>
            ));
        };
        return (
            <div className={"active-chat"}>
                {
                    user && user.id ? (
                        renderMessages()
                    ) : (
                        <div className="card">
                               You are ready to chat ..
                        </div>
                    )
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
    user:PropTypes.any,
    me: PropTypes.string.isRequired,
};
  
export default MRightActiveChat;
  