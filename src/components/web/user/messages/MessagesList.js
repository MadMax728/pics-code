import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import { DateFormat } from "../../../Factory";
import MessageItem from './MessageItem';

const MessagesList = (
    { 
        items,
        me,
        handleMessageClick
    }) => {
        return (
            <div>
                 {
                     items.map((item, key) => (
                        <div key={item.id}> 
                            { 
                                key === 0 && (
                                    <div className="date">{ DateFormat(item.createdAt) }</div>
                                )
                            }
                            { 
                                key > 0 && (DateFormat(items[key - 1].createdAt) !== DateFormat(item.createdAt)) && (
                                    <div className="date">{ DateFormat(item.createdAt) }</div>
                                )
                            }
                            <div>
                                <MessageItem handleMessageClick={handleMessageClick} me={me} item={item} />
                            </div>
                        </div>
                    ))
                 }
            </div> 
        )
};


MessagesList.propTypes = {
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
    handleMessageClick: PropTypes.func,
    me: PropTypes.string.isRequired,
};
  
export default MessagesList;
  