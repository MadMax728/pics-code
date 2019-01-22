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
      search: '',
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
      default:
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

  handleChange = (e) => {
    e.preventDefault();
    const search = e.target.value;
    const { userList } = this.state;
    this.setState({ search: e.target.value });
    if(search) {
      const filtered = userList.filter( u => {
        if(u.name && u.username.includes(search)) return true;
        if(u.email && u.email.includes(search)) return true;
        if(u.name && u.name.includes(search)) return true;
        return false;
      });
      this.setState({ userList : filtered })
    } else {
          const  { usersData } = this.props;
          if(!usersData.isLoading) {
              this.setState({ userList : usersData.users })
          }
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
    const { activeIndex, userList, search } = this.state;

    return (
      <div>
        <div className="title-wrapper">
          <div className="modal-title">
            { Translations.messages_modal.messages }
            {/* <span className="edit"></span> */}
          </div>                    
        </div>
        <div className="msgs-search-user">
          <div className="input-group search-input-group">
            <input
              type="text"
              value={search}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Search"
            />
            <span className="input-group-addon">
              <button onClick={this.handleChange}>
                <span className="search_icon">
                  <img src={images.search} alt="Search" />
                </span>
              </button>
            </span>
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
