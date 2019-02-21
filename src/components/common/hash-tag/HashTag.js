import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHashTag } from "../../../actions";

class HashTag extends Component {
  constructor(props) {
    super(props);
    this.state = { hashTagList: null };
  }

  render() {
    let { hashTagList } = this.props;
    const { value } = this.props;
    const commentArr = value ? value.split(" ") : " ";
    const lastText = commentArr[commentArr.length - 1].substring(1);
    hashTagList =
      hashTagList &&
      hashTagList.filter(item => {
        return !!(
          lastText === "#" ||
          lastText === "" ||
          item.hashTagName.toLowerCase().indexOf(lastText.toLowerCase()) > -1
        );
      });

    return (
      <div>
        {hashTagList &&
          hashTagList.map(item => {
            return (
              <div
                role="button"
                tabIndex="0"
                key={"Commnet_" + item._id}
                onClick={() => {
                  this._commentsCbHashTag(item);
                }}
                id={item._id}
                onKeyDown={this.onKeyHandle}
              >
                <div>{item.hashTagName}</div>
              </div>
            );
          })}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getHashTag("hashTags").then(() => {
      if (this.props.hashTagData.hashTags) {
        this.setState({ hashTagList: this.props.hashTagData.hashTags });
      }
    });
  };

  _commentsCbHashTag = item => {
    const hashtag = item.hashTagName;
    //hashtag = hash_tag_list.filter
    const id = item._id;
    let { value } = this.props;
    const commentArr = value.split(" ");
    commentArr.pop();
    if (this.props.hashTag) {
      value = commentArr.join(" ") + " #" + hashtag;
      this.props.handleSetSatetToolTipHashTag(id, value);
    } else {
      value = commentArr.join(" ") + " #" + hashtag;
      this.props.handleSetSatetToolTipHashTag(value);
    }
  };
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
  hashTagData: PropTypes.any,
  hashTagList: PropTypes.any,
  hashTag: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashTag);
