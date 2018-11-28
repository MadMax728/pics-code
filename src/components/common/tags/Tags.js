import React, { Component } from "react";
import PropTypes from "prop-types";
import { WithContext as ReactTags } from "react-tag-input";

const propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.value,
      suggestions: this.props.suggestion,
      value: []
    };
  }

  handleDelete = i => {
    const { tags } = this.state;
    this.setState(
      {
        tags: tags.filter((tag, index) => index !== i)
      },
      () => {
        this.props.onChange(this.state.tags);
      }
    );
  };

  handleAddition = tag => {
    this.props.handleAddition(this.props.for, tag);
  };

  render() {
    console.log(this.props.suggestion);
    
    return (
        <ReactTags
          tags={this.props.value}
          suggestions={this.props.suggestion}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          delimiters={delimiters}
        />
    );
  }
}

Tags.propTypes = {
  suggestion: propTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func
};

Tags.propTypes = propTypes;

export default Tags;
