import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import MessagesLazyList from './MessagesLazyList';

const MRightActiveChat = (
    { 
        user,
        socket
    }) => {
        return (
            <div className={"active-chat"}>
                {
                    user && user.id ? (
                        <MessagesLazyList user={user} socket={socket} />
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
    user: PropTypes.any,
    socket: PropTypes.any
};
  
export default MRightActiveChat;
  