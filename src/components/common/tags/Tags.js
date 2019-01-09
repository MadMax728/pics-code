import React, { Component } from "react";
import PropTypes from "prop-types";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Tags extends Component {
  render() {
    const { value, suggestion, handleAddition, handleDelete } = this.props;
    return (
      <ReactTags
        // inline={false}
        tags={value}
        suggestions={suggestion}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
      />
    );
  }
}

const propTypes = {
  suggestion: PropTypes.any,
  value: PropTypes.any,
  handleAddition: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

Tags.propTypes = propTypes;

export default Tags;
