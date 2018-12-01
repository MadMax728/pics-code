import React from "react";
import propTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

const MLeftUserItem = ({ 
        item,
        message
    }) => {
       
        if(!item) {
            return '';
        }
        const userItem = item ? item : {};
        const userImage = userItem.image || images.image;

        return (
            <div className="user-img">
                <img src={userImage} alt={userItem.userName} />
                <div className="username">{userItem.userName}</div>
                { 
                    message && message.date && (
                        <div className="time">{message.date}</div>
                    )
                }
                {
                    message && message.text && (
                        <div className="text">{message.text}</div>
                    )
                }
            </div>
        )
};


MLeftUserItem.propTypes = {
    item: propTypes.shape({
        image: propTypes.string,
        userName: propTypes.string,
        id: propTypes.string,
    }),
    message: propTypes.shape({
        date: propTypes.string,
        text: propTypes.string,
        id: propTypes.string,
        me: propTypes.bool,
    })
};
  
export default MLeftUserItem;
  