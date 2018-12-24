import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as _ from "lodash";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import MLeftUsersList from './MLeftUsersList';
import MLeftTabs from './MLeftTabs';
import { getUserList } from "../../../../actions";

class MLeftContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex : '1',
            userList: []
        }
    }    

    componentDidMount = () => {
        this.handleUserListCase(parseInt(this.state.activeIndex));
    };

    getUserList = (type='subscribed') => {
        this.props.getUserList(type).then(() => {
            const  { usersData } = this.props;
            if(!usersData.isLoading) {
                console.log(usersData, usersData.users);
                this.setState({ userList : usersData.users })
            }
        });
    }

    handleUserListCase = (activeIndex) => {
        switch(activeIndex) {
            case 1 : 
                this.getUserList('subscribed');
            break;
            case 2 : 
                this.getUserList('unknown');
            break;
            case 3 : 
                this.getUserList('likes');
            break;
            case 4 : 
                this.getUserList('company');
            break;
        }
    }
    handleTypeClick = (e) => {
        const activeIndex = e.currentTarget.dataset.id
        this.setState({ activeIndex });
        this.handleUserListCase(parseInt(activeIndex));
        this.props.selectUser({});
    };
    
    handleChatClick = (e) => {
        const { userList } = this.state;
        const user = _.find(userList, { id: e.currentTarget.dataset.id });
        this.props.selectUser(user);
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
    getUserList: PropTypes.func.isRequired,
    me: PropTypes.string.isRequired,
    usersData: PropTypes.any,
    selectUser: PropTypes.func
  };
  
  const mapStateToProps = state => ({
    usersData: state.usersData
  });
  
  const mapDispatchToProps = {
    getUserList
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MLeftContainer);
  