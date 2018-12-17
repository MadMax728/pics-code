import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashTag } from "../hash-tag";
import { Username } from "../username";
import { ToolTip } from "../../ui-kit";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";

const propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleSetState: PropTypes.func.isRequired,
  isText: PropTypes.bool,
  maxLimit: PropTypes.any
};

class HashTagUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingLimitLength: 0
    };
  }

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
    } else if (lastText.charAt(0) === "@") {
      this.props.handleSetState(e.target.value, this.usernameShow);
    } else {
      this.props.handleSetState(e.target.value, this.none);
    }
  };

  handleLengthField = e => {
    const commentText = e.target.value;
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode == 13) {
      // console.log("you press enter");
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

  renderHashTagTips = () => {
    return (
      <HashTag
        value={this.props.value}
        handleSetSatetToolTipHashTag={this.handleSetSatetToolTipHashTag}
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
              onKeyUp={this.handleLengthField}
              onKeyDown={this.handleLengthField}
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

HashTagUsername.propTypes = propTypes;

export default HashTagUsername;
