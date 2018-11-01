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
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  form: PropTypes.any.isRequired,
  handleSetState: PropTypes.func.isRequired
};

class HashTagUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hashTagShow = () => {
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.comments_hash_tag));
  };

  hashTagHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.comments_hash_tag));
  };

  usernameShow = () => {
    /* eslint-disable */
    ReactTooltip.show(findDOMNode(this.refs.comments_username));
  };

  usernameHide = () => {
    /* eslint-disable */
    ReactTooltip.hide(findDOMNode(this.refs.comments_username));
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

  handleSetSatetToolTipHashTag = form => {
    this.props.handleSetState(form.comment, this.hashTagHide);
  };

  handleSetSatetToolTipUsername = form => {
    this.props.handleSetState(form.comment, this.usernameHide);
  };

  renderHashTagTips = () => {
    return (
      <HashTag
        form={this.props.form}
        handleSetSatetToolTipHashTag={this.handleSetSatetToolTipHashTag}
      />
    );
  };

  renderUserNameTips = () => {
    return (
      <Username
        form={this.props.form}
        handleSetSatetToolTipUsername={this.handleSetSatetToolTipUsername}
      />
    );
  };

  render() {
    const { form, placeholder, className, name } = this.props;

    return (
      <div>
        <input
          className={className}
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={this.handleChangeField}
          value={form.comment}
        />
        <div
          data-for="comments_hash_tag"
          role="button"
          data-tip="tooltip"
          ref="comments_hash_tag"
        />
        <div
          data-for="comments_username"
          role="button"
          data-tip="tooltip"
          ref="comments_username"
        />
        <ToolTip
          id="comments_hash_tag"
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
          id="comments_username"
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
