import React, { Component } from "react";
import PropTypes from "prop-types";
import { hash_tag_list } from "../../../mock-data";

const propTypes = {
  value: PropTypes.any.isRequired,
  handleSetSatetToolTipHashTag: PropTypes.func.isRequired
};

class HashTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashTagList: hash_tag_list
    };
  }

  onKeyHandle = () => {};

  _commentsCbHashTag = item => {
    const hashtag = item.hashtag;
    //hashtag = hash_tag_list.filter
    let { value } = this.props;
    const commentArr = value.split(" ");
    commentArr.pop();
    value = commentArr.join(" ") + " #" + hashtag;
    this.props.handleSetSatetToolTipHashTag(value);
  };

  render() {
    let { hashTagList } = this.state;
    const { value } = this.props;
    const commentArr = value.split(" ");
    const lastText = commentArr[commentArr.length - 1].substring(1);
    hashTagList = hashTagList.filter(item => {
      return !!(
        lastText === "#" ||
        lastText === "" ||
        item.hashtag.toLowerCase().indexOf(lastText.toLowerCase()) > -1
      );
    });

    return (
      <div>
        {hashTagList.map((item, index) => {
          return (
            /* eslint-disable */
            <div
              key={"Commnet_" + item.id}
              onClick={() => {
                this._commentsCbHashTag(item);
              }}
              id={item.id}
              onKeyDown={this.onKeyHandle}
            >
              <div>{item.hashtag}</div>
              <div>{item.posts} Posts</div>
            </div>
          );
        })}
      </div>
    );
  }
}

HashTag.propTypes = propTypes;

export default HashTag;
