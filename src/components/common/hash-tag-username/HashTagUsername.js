import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashTag } from "../hash-tag";
import { Username } from "../username";
import { ToolTip } from "../../ui-kit";
import ReactTooltip from "react-tooltip";
import { findDOMNode } from "react-dom";

const propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  handleSetState: PropTypes.func.isRequired
};

class HashTagUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const { value, placeholder, className, name } = this.props;

    return (
      <div>
        <input
          className={className}
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={this.handleChangeField}
          value={value}
        />
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
