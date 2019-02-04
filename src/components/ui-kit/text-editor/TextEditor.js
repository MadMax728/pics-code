import React, { Component } from "react";
import ReactQuill from 'react-quill';
import { modules, formats } from "../../../lib/constants/toolBarConfig";
import PropTypes from "prop-types";

class TextEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      theme: 'snow' 
    }
  }
  
  handleChange = (html) => {
    this.props.handleContentChange(html);    
  }

  render () {
    const { theme } = this.state;
    const { contentText } = this.props;

    return (
      <div>
        <ReactQuill 
          theme={theme}
          onChange={this.handleChange}
          value={contentText}
          modules={modules}
          formats={formats}
          bounds={'.app'}
          placeholder={'Write something...'}
         />
       </div>
       )
      }
}


TextEditor.propTypes = {
  handleContentChange: PropTypes.func.isRequired,
  contentText: PropTypes.any.isRequired
};

export default TextEditor;
