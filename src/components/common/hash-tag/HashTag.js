import React, { Component } from "react";
import PropTypes from "prop-types";
import { hash_tag_list } from "../../../mock-data";
import { connect } from "react-redux";
import { getDashboard, getHashTag } from "../../../actions";

class HashTag extends Component {
  constructor(props) {
    super(props);
    this.state = { hashTagList: hash_tag_list };
  }

  onKeyHandle = () => {};

  componentDidMount = () => {
    this.props.getHashTag("hashTags").then(() => {
      if (
        this.props.hashTagData.error &&
        this.props.hashTagData.error.status === 400
      ) {
        // Error
      } else if (this.props.hashTagData.hashTags) {
        // Success
      }
    });
  };

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
    console.log(hashTagList);
    console.log(value);
    const commentArr = value ? value.split(" ") : " ";
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
        {hashTagList.map(item => {
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

const mapStateToProps = state => ({
  hashTagData: state.hashTagData
});

const mapDispatchToProps = {
  getHashTag
};

HashTag.propTypes = {
  value: PropTypes.any.isRequired,
  handleSetSatetToolTipHashTag: PropTypes.func.isRequired,
  getHashTag: PropTypes.func,
  hashTagData: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashTag);
