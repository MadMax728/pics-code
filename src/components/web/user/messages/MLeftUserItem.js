import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

const MLeftUserItem = ({ 
        item,
        message
    }) => {
       
        if(!item) {
            return '';
        }
        const userItem = item ? item : {};
        const userImage = userItem.profileUrl || images.image;

        return (
            <div className="user-img">
                <img src={userImage} alt={userItem.username} />
                <div className="username">{userItem.username} </div>
                { 
                    message && message.createdAt && (
                        <div className="time">{message.createdAt}</div>
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
    item: PropTypes.shape({
        image: PropTypes.string,
        username: PropTypes.string,
        id: PropTypes.string,
    }),
    message: PropTypes.shape({
        date: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
        me: PropTypes.bool,
    })
};
  
export default MLeftUserItem;
  