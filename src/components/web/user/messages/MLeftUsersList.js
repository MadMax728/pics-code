import React from "react";
import propTypes from "prop-types";
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
                    key={item.userName}
                    data-id={item.id}
                    data-value={item.userName}
                    onClick={handleChatClick}
                    onKeyDown={handleChatClick}
                  >
                    <MLeftUserItem key={key} item={item} message={item.message} />
                </div>
            ));
        };
        return (
            <div className="user-chat-wrapper">
                {
                    items && items.length ? (
                        latestUserList()
                    ) : (
                        <div></div>
                    )
                }
            </div>
        )
};


MLeftUsersList.propTypes = {
    handleChatClick: propTypes.func,
    items: propTypes.arrayOf(
        propTypes.shape({
          userName: propTypes.string,
          id: propTypes.string,
          image: propTypes.string,
          read: propTypes.bool,
          message: propTypes.shape({
            date: propTypes.string,
            text: propTypes.string,
            id: propTypes.string,
            me: propTypes.bool,
          })
        })
    )
};
  
export default MLeftUsersList;
  