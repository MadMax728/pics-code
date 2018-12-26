import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHashUser } from "../../../actions";
import { username_list } from "../../../mock-data";

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: username_list
    };
  }

  componentDidMount = () => {
    this.props.getHashUser("usernames").then(()=> {
      if(this.props.usersList){
        this.setState({usersListtest: this.props.usersList})
      }
    });
  }

  _commentsCbUserName = item => {
    const username = item.username;
    //hashtag = hash_tag_list.filter
    let { value } = this.props;
    const commentArr = value.split(" ");
    commentArr.pop();
    value = commentArr.join(" ") + " @" + username;
    this.props.handleSetSatetToolTipUsername(value);
  };

  render() {
    let { usersList } = this.state;
    const { value } = this.props;
    const commentArr = value? value.split(" ") : " ";
    const lastText = commentArr[commentArr.length - 1].substring(1);
    usersList = usersList && usersList.filter(item => {
      return !!(
        lastText === "@" ||
        lastText === "" ||
        item.username.toLowerCase().indexOf(lastText.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });
    
    return (
      <div>
        {usersList &&
          usersList.map((item) => {
          return (
            /* eslint-disable */
            <div
              key={"Commnet_" + item.id}
              onClick={() => {
                this._commentsCbUserName(item);
              }}
              id={item.id}
              onKeyDown={this.onKeyHandle}
              className="tag-person-wrapr"
            >
              <div className="img-wrapr">
                <img
                  src={item.image}
                  alt={"image" + `${item.username}`}
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
              <div className="person-info-wrapr">
                <div className="person-name">{item.username}</div>
                <div className="person-info">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.hashUserData.usernames,
  isLoading: state.hashUserData.isLoading,
  error: state.hashUserData.error
});

const mapDispatchToProps = {
  getHashUser
};

Username.propTypes = {
  getHashUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  usersList: PropTypes.any,
  value: PropTypes.any.isRequired,
  handleSetSatetToolTipUsername: PropTypes.func.isRequired
  // error: PropTypes.any
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Username);