import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants"

class UsernameList extends Component {
  _CbUserName = item => {
    const username = item.username;
    const id = item.id;
    let { value } = this.props;
    const usernameArr = value.split(" ");
    usernameArr.pop();
    value = usernameArr.join(" ")+ username;
    this.props.handleSetSatetToolTipUsername(id,value);
  };

  render() {
    let { usersList } = this.props;

    const { value } = this.props;

    const usernameArr = value? value.split(" ") : " ";

    const lastText = usernameArr[usernameArr.length - 1].substring(1);
    
    usersList = usersList && usersList.filter(item => {
      return !!(
        lastText === "@" ||
        lastText === "" ||
        item.username && item.username.toLowerCase().indexOf(lastText.toLowerCase()) > -1 ||
        item.name !== undefined && item.name.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });
    
    return (
      <div>
        {usersList &&
          usersList.map((item) => {
          return (
            /* eslint-disable */
            <div
              key={"Username_" + item.id}
              onClick={() => {
                this._CbUserName(item);
              }}
              id={item.id}
              onKeyDown={this.onKeyHandle}
              className="tag-person-wrapr"
            >
              <div className="img-wrapr">
                <img
                  src={item.profileUrl? item.profileUrl : images.image}
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

UsernameList.propTypes = {
  usersList: PropTypes.any,
  value: PropTypes.any.isRequired,
  handleSetSatetToolTipUsername: PropTypes.func.isRequired,
};


export default UsernameList;