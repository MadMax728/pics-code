import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as _ from "lodash";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import MLeftUsersList from "./MLeftUsersList";
import MLeftTabs from "./MLeftTabs";
import { getUserList } from "../../../../actions";

class MLeftContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeIndex: "1",
      userList: []
    };
  }

  componentDidMount() {
    this.handleUserListCase(1);
  }

  getUserList = (type='subscribed') => {
      this.setState({ userList : [] });
      this.props.getUserList(type).then(() => {
          const  { usersData } = this.props;
          if(!usersData.isLoading) {
              this.setState({ userList : usersData.users })
          }
      });
  }

  handleUserListCase = activeIndex => {
    switch (activeIndex) {
      case 1:
        this.getUserList("subscriber");
        break;
      case 2:
        this.getUserList("unknown");
        break;
      case 3:
        this.getUserList("likeYou");
        break;
      case 4:
        this.getUserList("company");
        break;
    }
  }

  handleTypeClick = (e) => {
    const currentIndex = e.currentTarget.dataset.id
    const { activeIndex } = this.state;
    if(currentIndex !== activeIndex) {
        this.setState({ activeIndex: currentIndex });
        this.handleUserListCase(parseInt(currentIndex));
        this.props.selectUser({});
    }
  };
    
  handleChatClick = (e) => {
      const { userList } = this.state;
      const user = _.find(userList, { id: e.currentTarget.dataset.id });
      this.props.selectUser(user);
  };

  handleChatClick = e => {
    const { userList } = this.state;
    const user = _.find(userList, { id: e.currentTarget.dataset.id });
    this.props.selectUser(user);
  };

  render() {
    const { activeIndex, userList } = this.state;

    return (
      <div>
        <div className="title-wrapper">
          <div className="modal-title">
            {Translations.messages_modal.messages}
          </div>
          <div className="edit">
            <img src={images.edit} alt={"edit"} />
          </div>
        </div>
        <MLeftTabs
          activeIndex={activeIndex}
          handleTypeClick={this.handleTypeClick}
        />
        <MLeftUsersList
          items={userList}
          handleChatClick={this.handleChatClick}
        />
      </div>
    );
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
