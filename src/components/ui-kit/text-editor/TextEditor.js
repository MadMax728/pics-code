import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw } from "draft-js";
import * as toolBarConfig from "../../../lib/constants/toolBarConfig";

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
    const contentState = convertFromRaw(content);
    this.state = {
      contentState
    };
    console.log("conent", contentState);
  }
  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  render() {
    console.log("rawjs", convertFromRaw(content));
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
export default TextEditor;
