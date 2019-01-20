import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHashUser } from "../../../actions";
import * as images from "../../../lib/constants/";

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: null
    };
  }

  render() {
    let { usersList } = this.state;

    const { value } = this.props;

    const commentArr = value ? value.split(" ") : " ";

    const lastText = commentArr[commentArr.length - 1].substring(1);

    usersList =
      usersList &&
      usersList.filter(item => {
        return !!(
          lastText === "@" ||
          lastText === "" ||
          (item.username &&
            item.username.toLowerCase().indexOf(lastText.toLowerCase()) > -1) ||
          (item.name !== undefined &&
            item.name.toLowerCase().indexOf(lastText.toLowerCase()) > -1)
        );
      });

    return (
      <div>
        {usersList &&
          usersList.map(item => {
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
                    src={item.profileUrl ? item.profileUrl : images.image}
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

  componentDidMount = () => {
    this.props.getHashUser("usernames").then(() => {
      if (this.props.usersList) {
        this.setState({ usersList: this.props.usersList });
      }
    });
  };

  _commentsCbUserName = item => {
    const username = item.username;
    const id = item.id;
    let { value } = this.props;
    const commentArr = value.split(" ");
    commentArr.pop();
    if (this.props.username) {
      value = commentArr.join(" ") + username;
      this.props.handleSetSatetToolTipUsername(id, value);
    } else {
      value = commentArr.join(" ") + " @" + username;
      this.props.handleSetSatetToolTipUsername(value);
    }
  };

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
  handleSetSatetToolTipUsername: PropTypes.func.isRequired,
  username: PropTypes.bool
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Username);
