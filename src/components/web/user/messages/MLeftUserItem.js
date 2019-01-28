import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import { DateFormat } from "../../../Factory";
import { UserImageItem } from "../../../ui-kit";
import * as websocket from '../../../../websocket';

class MLeftUserItem extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastMessage : this.props.message
        }
        const { item } = this.props;
        // call our connect function and define
        // an anonymous callback function that 
        // simply console.log's the received 
        // message
        websocket.connect(lastMessage => {
            if(item && (item.id === lastMessage.recipientId || item.id === lastMessage.senderId)) {
                this.setState({lastMessage});
            }
        });
    }    
    
    render() {
        const { item } = this.props;
        const { lastMessage } = this.state;
        const userItem = item ? item : {};
        const userImage = userItem.profileUrl || images.image;
        return (
            <div className="user-img">
                <UserImageItem item={userImage} customClass={`img-circle img-responsive float_left padding-right-15`} />
                <div className="titles_wrapper">
                    <div className="normal_title">{userItem.username} </div>
                    {
                            lastMessage && lastMessage.content && (
                                <div className="secondary_title">{lastMessage.content}</div>
                            )
                    }
                </div>
                { 
                    lastMessage && lastMessage.createdAt && (
                        <div className="time">{ DateFormat(lastMessage.createdAt,  Translations.date_format.time, true) }</div>
                    )
                }
            </div>
        )
    }

}

MLeftUserItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        username: PropTypes.string,
        id: PropTypes.string,
    }),
    message: PropTypes.any
};
  
export default MLeftUserItem;
  