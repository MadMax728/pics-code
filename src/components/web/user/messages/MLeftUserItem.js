import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import { DateFormat } from "../../../Factory";
import { UserImageItem } from "../../../ui-kit";


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
                <UserImageItem item={userImage} customClass={`img-circle img-responsive float_left padding-right-15`} />
                <div className="titles_wrapper">
                    <div className="normal_title">{userItem.username} </div>
                    {
                            message && message.content && (
                                <div className="secondary_title">{message.content}</div>
                            )
                    }
                </div>
                { 
                    message && message.createdAt && (
                        <div className="time">{ DateFormat(item.createdAt,  Translations.date_format.time, true) }</div>
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
    message: PropTypes.any
};
  
export default MLeftUserItem;
  