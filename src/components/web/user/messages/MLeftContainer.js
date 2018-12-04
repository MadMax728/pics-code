import React, { Component } from "react";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import MLeftUsersList from './MLeftUsersList';
import MLeftTabs from './MLeftTabs';
import classnames from "classnames";

class MLeftContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex : '1',
            activeUser : '',
            userList: []
        }
    }    

    handleTypeClick = (e) => {
        this.setState({ activeIndex: e.currentTarget.dataset.id });
    };
    
    handleChatClick = (e) => {
        this.setState({ activeUser: e.currentTarget.dataset.id });
    };

    render() {
        
        const { activeIndex, userList } = this.state;

        return (
            <div>
                <div className="title-wrapper">
                    <div className="modal-title">{Translations.messages_modal.messages}</div>
                    <div className="edit">
                        <img src={images.edit} alt={"edit"} />
                    </div>
                </div>
                <MLeftTabs activeIndex={activeIndex} handleTypeClick={this.handleTypeClick} />
                <MLeftUsersList items={userList} handleChatClick={this.handleChatClick} />
            </div>
        )
    }

}
  
export default MLeftContainer;
  