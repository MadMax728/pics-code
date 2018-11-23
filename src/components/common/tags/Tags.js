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
      suggestions: this.props.suggestion
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
    this.setState(
      state => ({ tags: [...state.tags, tag] }),
      () => {
        this.props.onChange(this.state.tags);
      }
    );
  };

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags }, () => {
      this.props.onChange(this.state.tags);
    });
  };

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={this.props.value}
          suggestions={this.props.suggestion}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

Tags.propTypes = propTypes;

export default Tags;
