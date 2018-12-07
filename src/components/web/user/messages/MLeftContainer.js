import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import MLeftUsersList from './MLeftUsersList';
import MLeftTabs from './MLeftTabs';
import { getSubscribers } from "../../../../actions";

class MLeftContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex : '1',
            activeUser : '',
            userList: []
        }
    }    

    componentDidMount = () => {
        this.handleUserListCase(parseInt(this.state.activeIndex));
    };

    getSubscribers = () => {
        this.props.getSubscribers().then(() => {
            const  { usersData } = this.props;
            if(!usersData.isLoading) {
                this.setState({ userList : usersData.subscribers })
            }
        });
    }

    getLikesYouUsers = () => {
        this.setState({ userList : [] })
    }

    getUnknownUsers = () => {
        this.setState({ userList : [] })
    }

    getCompanyUsers = () => {
        this.setState({ userList : [] })
    }

    handleUserListCase = (activeIndex) => {
        switch(activeIndex) {
            case 1 : 
                this.getSubscribers();
            break;
            case 2 : 
                this.getUnknownUsers();
            break;
            case 3 : 
                this.getLikesYouUsers();
            break;
            case 4 : 
                this.getCompanyUsers();
            break;
        }
    }
    handleTypeClick = (e) => {
        const activeIndex = e.currentTarget.dataset.id
        this.setState({ activeIndex });
        this.handleUserListCase(parseInt(activeIndex));
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
    
MLeftContainer.propTypes = {
    getSubscribers: PropTypes.func.isRequired,
    usersData: PropTypes.any,
  };
  
  const mapStateToProps = state => ({
    usersData: state.usersData
  });
  
  const mapDispatchToProps = {
    getSubscribers
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MLeftContainer);
  