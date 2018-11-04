import React, { Component } from "react";
import PropTypes from "prop-types";
import { username_list } from "../../../mock-data";

const propTypes = {
  value: PropTypes.any.isRequired,
  handleSetSatetToolTipUsername: PropTypes.func.isRequired
};

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameList: username_list
    };
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
    let { userNameList } = this.state;
    const { value } = this.props;
    const commentArr = value.split(" ");
    const lastText = commentArr[commentArr.length - 1].substring(1);
    userNameList = userNameList.filter(item => {
      return !!(
        lastText === "@" ||
        lastText === "" ||
        item.username.toLowerCase().indexOf(lastText.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });

    return (
      <div>
        {userNameList.map((item, index) => {
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
                  alt={"image" + `${item.name}`}
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

Username.propTypes = propTypes;

export default Username;