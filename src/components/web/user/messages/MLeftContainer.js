import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as _ from "lodash";
import { Translations } from "../../../../lib/translations";
import * as images from "../../../../lib/constants/images";
import MLeftUsersList from "./MLeftUsersList";
import MLeftTabs from "./MLeftTabs";
import { getUserList, searchSubscribedUsers } from "../../../../actions";
import { Button, Input } from "../../../ui-kit";

class MLeftContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeIndex: "1",
      search: "",
      userList: [],
      toggleSearch: false
    };
  }

  componentDidMount() {
    this.handleUserListCase(1);
  }

  getUserList = (type = "subscribed") => {
    this.setState({ userList: [] });
    this.props.getUserList(type).then(() => {
      const { usersData } = this.props;
      console.log("type", type);
      console.log("creator", this.props.isCreator);
      if (!usersData.isLoading) {
        if (this.props.isCreator) {
          const { activeIndex } = this.state;
          // For - Creator user not shown in list
          // selectedUserList = usersData.users.filter(
          //   user => user.username !== this.props.isCreator
          // );
          let selectedUserList = "";
          selectedUserList = usersData.users.find(
            user => user.username === this.props.isCreator
          );
          if (selectedUserList) {
            this.setState({ activeIndex });
          } else {
            const indexCount = parseInt(activeIndex) + 1;
            this.handleUserListCase(indexCount);
            this.setState({ activeIndex: indexCount.toString() });
          }
        }
        this.setState({
          userList: usersData.users
        });
      }
    });
  };

  handleUserListCase = activeIndex => {
    switch (activeIndex) {
      case 1:
        this.getUserList("subscriber");
        break;
      case 2:
        this.getUserList("unknown");
        break;
      // case 3:
      //   this.getUserList("likeYou");
      //   break;
      case 4:
        this.getUserList("company");
        break;
      default:
    }
  };

  handleTypeClick = e => {
    const currentIndex = e.currentTarget.dataset.id;
    const { activeIndex } = this.state;
    if (currentIndex !== activeIndex) {
      this.setState({ activeIndex: currentIndex });
      this.handleUserListCase(parseInt(currentIndex));
      this.props.selectUser({});
    }
  };

  handleToggleSearch = e => {
    const { toggleSearch } = this.state;
    this.setState({
      toggleSearch: !toggleSearch,
      userList: [],
      activeIndex: "1"
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { activeIndex } = this.state;
    let page = 1;
    let limit = 100;
    const search = e.target.value;
    const { userList } = this.state;
    this.setState({ search: e.target.value });
    if (search) {
      this.setState({
        userList: []
      });
      this.props.searchSubscribedUsers(search, page, limit).then(() => {
        const { usersData } = this.props;
        if (!usersData.isLoading) {
          this.setState({
            userList: usersData.users
          });
        }
      });
    } else {
      console.log("clean cheat");
      this.getUserList();
    }
  };

  handleChatClick = e => {
    const { userList, toggleSearch } = this.state;
    const user = _.find(userList, { _id: e.currentTarget.dataset._id });
    this.setState({
      toggleSearch: !toggleSearch,
      activeIndex: "1"
    });
    this.props.selectUser(user);
  };

  render() {
    const { activeIndex, userList, search, toggleSearch } = this.state;

    return (
      <div>
        <div className="title-wrapper">
          <div className="row">
            <div className="col-md-10">
              <div className="modal-title">
                {Translations.messages_modal.messages}
              </div>
            </div>
            <div className="col-md-2">
              <Button
                onClick={this.handleToggleSearch}
                text={`Edit`}
              />
            </div>
          </div>
        </div>
        {toggleSearch && <div className="msgs-search-user">
          <div className="input-group search-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={this.handleChange}
              defaultValue={""}
            />
            <span className="input-group-addon">
              <Button
                onClick={this.handleChange}
                text={
                  <span className="search_icon">
                    <img src={images.search} alt="Search" />
                  </span>
                }
              />
            </span>
          </div>
        </div>}
        {
          !toggleSearch && <MLeftTabs
            activeIndex={activeIndex}
            handleTypeClick={this.handleTypeClick}
          />
        }
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
  searchSubscribedUsers: PropTypes.func.isRequired,
  me: PropTypes.string.isRequired,
  usersData: PropTypes.any,
  selectUser: PropTypes.func,
  isCreator: PropTypes.any
};

const mapStateToProps = state => ({
  usersData: state.usersData
});

const mapDispatchToProps = {
  getUserList,
  searchSubscribedUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MLeftContainer);
