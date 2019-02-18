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

  imageHandler = (value) => {
    this.upload.click();
  }

  videoHandler = (value) => {
    this.upload.click();
  }

  onChangeFile = (event) => {
    // event.stopPropagation();
    // event.preventDefault();
    // var file = event.target.files[0];
    // var range = this.quillRef.getEditor().getSelection();
    // this.quillRef.getEditor().insertEmbed(range.index, 'image', file, "user");
    let range = this.quillRef.getEditor().getSelection();
    let value = prompt('What is the image URL');
    if(value) {
        this.quillRef.getEditor().insertEmbed(range.index, 'image', value, "user");
    }
  }

  render () {
    const { theme } = this.state;
    const { contentText } = this.props;

    let modules = {
      toolbar: {
          container: [
            [{ 'header': '1'}, {'header': '2'}],
            [{size: []}],
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
          ],
          handlers: {
             'image': this.imageHandler,
             'video': this.videoHandler
          }
      }
    };
    
    let formats = [
      'video', 'image', 'link', 'blockquote','bold', 'italic', 'underline', 'list', 'strike', 'header'
    ]

    return (
      <div>
        <ReactQuill 
          theme={theme}
          onChange={this.handleChange}
          value={contentText}
          modules={modules}
          formats={formats}
          ref={(el) => this.quillRef = el}
          bounds={'.app'}
          placeholder={'Write something...'}
         />
         <input type="file" id="file"  
                onChange={this.onChangeFile}
                ref={(ref) => this.upload = ref} 
                style={{display: "none"}}/>
       </div>
       )
      }
}


TextEditor.propTypes = {
  handleContentChange: PropTypes.func.isRequired,
  contentText: PropTypes.any.isRequired
};

export default TextEditor;
