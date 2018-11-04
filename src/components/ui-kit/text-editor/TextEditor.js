import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML, EditorState, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { toolBarConfig } from "../../../lib/constants/toolBarConfig";
import propTypes from "prop-types";

const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ]
};
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

  handleChange = editorState => {
    const content = convertToHTML(editorState.getCurrentContent());
    console.log(content);
  };

  render() {
    return (
      <Editor
        defaultEditorState={this.state.editorState}
        onEditorStateChange={this.handleChange}
        toolbar={toolBarConfig}
      />
    );
  }
}

TextEditor.propTypes = {
  handleContentChange: propTypes.func.isRequired,
  contentText: propTypes.any.isRequired
};

export default TextEditor;