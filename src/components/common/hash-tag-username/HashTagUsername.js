import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashTag } from "../hash-tag";
import { Username } from "../username";
import { ToolTip } from "../../ui-kit";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";
import { getHashTag, addHashTag } from "../../../actions";
import { connect } from "react-redux";

class HashTagUsername extends Component {
  constructor(props) {
    super(props);
    this.state = { remainingLimitLength: 0, hashTagList: null };
  }

  componentDidMount = () => {
    this.getHashTagList();
  };

  getHashTagList = () => {
    this.props.getHashTag("hashTags").then(() => {
      if (this.props.hashTagData.hashTags) {
        this.setState({ hashTagList: this.props.hashTagData.hashTags });
      }
    });
  };

  hashTagShow = () => {
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.hash_tag));
  };

  hashTagHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.hash_tag));
  };

  usernameShow = () => {
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.username));
  };

  usernameHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.username));
  };

  none = () => {};

  handleChangeField = e => {
    const commentArr = e.target.value.split(" ");
    const lastText = commentArr[commentArr.length - 1];
    /* eslint-disable */
    this.hashTagHide();
    this.usernameHide();
    if (lastText.charAt(0) === "#") {
      this.props.handleSetState(e.target.value, this.hashTagShow);
      // this.handleAddHashTag(lastText);
    } else if (lastText.charAt(0) === "@") {
      this.props.handleSetState(e.target.value, this.usernameShow);
    } else {
      this.props.handleSetState(e.target.value, this.none);
    }
  };

  handleLengthField = e => {
    const commentText = e.target.value;

    const commentArr = e.target.value.split(" ");
    const lastText = commentArr[commentArr.length - 1];

    var keyCode = e.keyCode ? e.keyCode : e.which;

    if (lastText.charAt(0) === "#") {
      this.props.handleSetState(e.target.value, this.hashTagShow);
      if (keyCode == 32) {
        this.handleAddHashTag(lastText);
      }
    }

    let limitCount = "";
    let limitNum = this.props.maxLimit;
    if (commentText.length > limitNum) {
      commentText = limitField.value.substring(0, limitNum);
    } else {
      limitCount = limitNum - commentText.length;
    }
    this.setState({ remainingLimitLength: limitCount });
  };

  handleSetSatetToolTipHashTag = value => {
    this.props.handleSetState(value, this.hashTagHide);
  };

  handleSetSatetToolTipUsername = value => {
    this.props.handleSetState(value, this.usernameHide);
  };

  handleAddHashTag = value => {
    value = value.slice(1);
    let { hashTagList } = this.state;
    const indexOf = hashTagList.findIndex(f => {
      return f.hashTagName === value;
    });

    if (indexOf === -1) {
      const hashTagName = { hashTagName: value };
      this.props.addHashTag(hashTagName).then(() => {
        if (
          this.props.hashTagData &&
          this.props.hashTagData.addedHashTags.success
        ) {
          this.getHashTagList();
        }
      });
    }
  };

  renderHashTagTips = () => {
    return (
      <HashTag
        value={this.props.value}
        handleSetSatetToolTipHashTag={this.handleSetSatetToolTipHashTag}
        hashTagList={this.state.hashTagList}
      />
    );
  };

  renderUserNameTips = () => {
    return (
      <Username
        value={this.props.value}
        handleSetSatetToolTipUsername={this.handleSetSatetToolTipUsername}
      />
    );
  };

  render() {
    const { value, placeholder, className, name, isText } = this.props;
    return (
      <div>
        {isText ? (
          <div>
            <input
              className={className}
              placeholder={placeholder}
              type="text"
              name={name}
              onChange={this.handleChangeField}
              value={value}
              maxLength={this.props.maxLimit}
            />
            {this.state.remainingLimitLength > 0 &&
            this.state.remainingLimitLength !== 1000 ? (
              <p className="commenter-info">
                You have {this.state.remainingLimitLength} characters left{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        ) : (
          <textarea
            className={className}
            placeholder={placeholder}
            name={name}
            onChange={this.handleChangeField}
            value={value}
            onKeyDown={this.handleLengthField}
            onKeyUp={this.handleLengthField}
          />
        )}
        <div
          data-for="hash_tag"
          role="button"
          data-tip="tooltip"
          ref="hash_tag"
        />
        <div
          data-for="username"
          role="button"
          data-tip="tooltip"
          ref="username"
        />
        <ToolTip
          id="hash_tag"
          getContent={this.renderHashTagTips}
          effect="solid"
          delayHide={0}
          delayShow={0}
          delayUpdate={0}
          place={"bottom"}
          border={true}
          type={"light"}
        />

        <ToolTip
          id="username"
          getContent={this.renderUserNameTips}
          effect="solid"
          delayHide={0}
          delayShow={0}
          delayUpdate={0}
          place={"bottom"}
          border={true}
          type={"light"}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hashTagData: state.hashTagData
});

const mapDispatchToProps = {
  getHashTag,
  addHashTag
};

HashTagUsername.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleSetState: PropTypes.func.isRequired,
  isText: PropTypes.bool,
  maxLimit: PropTypes.any,
  getHashTag: PropTypes.func,
  addHashTag: PropTypes.func,
  hashTagData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashTagUsername);
