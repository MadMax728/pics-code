import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromHTML, EditorState, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { toolBarConfig } from "../../../lib/constants/toolBarConfig";
import PropTypes from "prop-types";

class TextEditor extends Component {
  constructor(props) {
    super(props);

    let editorState;

    if (props.contentText) {
      const blocksFromHTML = convertFromHTML(props.contentText);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    } else {
      editorState = EditorState.createEmpty();
    }

    this.state = { editorState };

  }

  render() {
    return (
      <Editor
        defaultEditorState={this.state.editorState}
        onEditorStateChange={this.handleChange}
        toolbar={toolBarConfig}
      />
    );
  }

  componentDidMount = () => {
    let editorState;
    
    if (this.props.contentText) {
      const blocksFromHTML = convertFromHTML(this.props.contentText);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    } else {
      editorState = EditorState.createEmpty();
    }
    this.setState({ editorState });
  }

  handleChange = editorState => {
    const content = convertToHTML(editorState.getCurrentContent());
    this.props.handleContentChange(content);
  };
}


TextEditor.propTypes = {
  handleContentChange: PropTypes.func.isRequired,
  contentText: PropTypes.any.isRequired
};

export default TextEditor;
