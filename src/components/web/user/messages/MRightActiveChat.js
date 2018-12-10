import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

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

            console.log('items', items);
            
            return items.map((item) => (
                <div key={item.id}> 
                    <div className="date">{ item.createdAt }</div>
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
                        <div className="full-width">
                            <div className="card">
                               <h6>You are ready to chat ..</h6>
                               <img src={images.profile_pic} alt="message"/>
                             </div>
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
  