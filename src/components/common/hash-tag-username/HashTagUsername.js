import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HashTag } from "../hash-tag";
import { Username } from "../username";
import { ToolTip, Input } from "../../ui-kit";
import ReactTooltip from "react-tooltip";
import { getHashTag, addHashTag } from "../../../actions";
import { Translations } from "../../../lib/translations";

class HashTagUsername extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.hash_tag = React.createRef();
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
    ReactTooltip.show(this.hash_tag);
  };

  hashTagHide = () => {
    ReactTooltip.hide(this.hash_tag);
  };

  usernameShow = () => {
    ReactTooltip.show(this.username);
  };

  usernameHide = () => {
    ReactTooltip.hide(this.username);
  };

  none = () => {};

  handleChangeField = e => {
    const { isText } = this.props;
    const value = isText ? e.values.val : e.target.value;
    const commentArr = value.split(" ");
    const lastText = commentArr[commentArr.length - 1];
    this.hashTagHide();
    this.usernameHide();
    if (lastText.charAt(0) === "#") {
      this.props.handleSetState(value, this.hashTagShow);
      // this.handleAddHashTag(lastText);
    } else if (lastText.charAt(0) === "@") {
      this.props.handleSetState(value, this.usernameShow);
    } else {
      this.props.handleSetState(value, this.none);
    }
  };

  handleLengthField = e => {
    const { isText } = this.props;
    const value = isText ? e.values.val : e.target.value;
    let commentText = value;
    let limitField;
    const commentArr = value.split(" ");
    const lastText = commentArr[commentArr.length - 1];

    const keyCode = e.keyCode ? e.keyCode : e.which;

    if (lastText.charAt(0) === "#") {
      this.props.handleSetState(value, this.hashTagShow);
      if (keyCode === 32) {
        this.handleAddHashTag(lastText);
      }
    }

    let limitCount = "";
    const limitNum = this.props.maxLimit;
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

  handleSetSatetToolTipUsername = (value, id) => {
    this.props.handleSetState(value, this.usernameHide, id);
  };

  handleAddHashTag = value => {
    value = value.slice(1);
    const { hashTagList } = this.state;
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
    const {
      value,
      placeholder,
      className,
      name,
      isText,
      maxLimit
    } = this.props;
    const { remainingLimitLength } = this.state;
    return (
      <div>
        {isText ? (
          <div>
            <Input
              className={className}
              placeholder={placeholder}
              type="text"
              name={name}
              onChange={this.handleChangeField}
              value={value}
              maxLength={maxLimit}
            />
            {remainingLimitLength > 0 && remainingLimitLength !== 1000 ? (
              <p className="commenter-info">
                {Translations.you_have} {remainingLimitLength}{" "}
                {Translations.characters_left}{" "}
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
          ref={hash_tag => (this.hash_tag = hash_tag)}
        />
        <div
          data-for="username"
          role="button"
          data-tip="tooltip"
          ref={username => (this.username = username)}
        />
        <ToolTip
          id="hash_tag"
          getContent={this.renderHashTagTips}
          effect="solid"
          delayHide={0}
          delayShow={0}
          delayUpdate={0}
          place={"bottom"}
          border
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
          border
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
