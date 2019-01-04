import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import MessagesList from './MessagesList';

const MRightActiveChat = (
    { 
        items,
        listRef,
        user,
        me,
        handleMessageClick
    }) => {
        return (
            <div className={"active-chat"} ref={listRef}>
                {
                    user && user.id ? (
                        <MessagesList handleMessageClick={handleMessageClick} me={me} items={items} />
                    ) : (
                        <div className="full-width text-center">
                             <h6>{Translations.messages_modal.ready}</h6>
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
          content: PropTypes.any,
          createdAt: PropTypes.any,
          updatedAt: PropTypes.any,
          recipientId: PropTypes.any,
          senderId: PropTypes.any,
        })
    ),
    listRef: PropTypes.any,
    handleMessageClick: PropTypes.func,
    user:PropTypes.any,
    me: PropTypes.string.isRequired,
};
  
export default MRightActiveChat;
  