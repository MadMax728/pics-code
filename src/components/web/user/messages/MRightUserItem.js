import React from "react";
import PropTypes from "prop-types";
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
                <span className="username">{item.username}</span>
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
    item: PropTypes.shape({
        image: PropTypes.string,
        username: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
    }),
    onDeleteHistoryClick: PropTypes.func.isRequired
};

MRightUserItem.defaultProps = {
    item: {}
};
    
export default MRightUserItem;