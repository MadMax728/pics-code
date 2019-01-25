import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import MLeftUserItem from './MLeftUserItem';

const MLeftUsersList = (
    { 
        items,
        handleChatClick
    }) => {
        const latestUserList = () => {
            return items.map((item, key) => (
                <div
                    role="button"
                    tabIndex={key}
                    className={classnames("chat-wrapper",{ "new" : !item.read })}
                    key={item.id}
                    data-id={item.id}
                    data-value={item.username}
                    onClick={handleChatClick}
                    onKeyDown={handleChatClick}
                  >
                    <MLeftUserItem key={key} item={item} message={item.lastMessage} />
                </div>
            ));
        };
        return (
            <div className="user-chat-wrapper">
                {
                    items && items.length ? (
                        latestUserList()
                    ) : (
                        <div className="card">
                                No message yet...
                        </div>
                    )
                }
            </div>
        )
};


MLeftUsersList.propTypes = {
    handleChatClick: PropTypes.func,
    items: PropTypes.any
};
  
export default MLeftUsersList;
  