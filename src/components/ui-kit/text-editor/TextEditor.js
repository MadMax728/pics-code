import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
  constructor(props, context) {
    super(props, context);
    // const contentState = convertFromRaw(content);
    this.state = {
      contentState: ""
    };
    // console.log("conent", contentState);
  }

  onContentStateChange = contentState => {
    this.props.handleContentChange(contentState);

    this.setState({
      contentState: this.props.contentText
    });
  };

  render() {
    console.log("texteditor value", this.props.contentText);
    return (
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={toolBarConfig}
        onContentStateChange={this.onContentStateChange}
      />
    );
  }
}

TextEditor.propTypes = {
  handleContentChange: propTypes.func.isRequired,
  contentText: propTypes.any.isRequired
};

export default TextEditor;
