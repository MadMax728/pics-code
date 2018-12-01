import React from "react";
import propTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

const MRightUserItem = (
    { 
        item,
        onDeleteHistoryClick 
    }) => {
      return (
        <div className="user-wrapper">
            {
                item && item.image && (
                    <div className="user-img">
                        <img src={item.image} alt={"user"} />
                     </div> 
                )
            }
            <div className="username-wrapper">
                <span className="username">{item.userName}</span>
                <br />
                <span className="name">{item.name}</span>
            </div>
            {
                item && item.id && (
                    <div className="delete" data-id={item.id} role="presentation" onClick={onDeleteHistoryClick} onKeyDown={onDeleteHistoryClick}>
                        <img src={images.bin} alt={"delete"} />
                    </div>
                )
            }
        </div>
      )
};

MRightUserItem.propTypes = {
    item: propTypes.shape({
        image: propTypes.string,
        userName: propTypes.string,
        name: propTypes.string,
        id: propTypes.string,
    }),
    onDeleteHistoryClick: propTypes.func.isRequired
};

MRightUserItem.defaultProps = {
    item: {}
};
    
export default MRightUserItem;