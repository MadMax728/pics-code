import React, { Component } from "react";
import ReactQuill from 'react-quill';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { modules, formats } from "../../../lib/constants/toolBarConfig";
import * as enumerations from "../../../lib/constants/enumerations";
import { Translations } from "../../../lib/translations";
import { uploadMedia } from "../../../actions";
import { InlineLoading } from "../loading-indicator";

class TextEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      theme: 'snow',
      isMedia: true, // True for Image and False for Video
      mediaTypes: enumerations.mediaTypes.image,
      type: null
    }
  }
  
  handleChange = (html) => {
    this.props.handleContentChange(html);    
  }

  imageHandler = (value) => {
    this.setState({ isMedia: true, mediaTypes: enumerations.mediaTypes.image});
    this.upload.click();
  }

  videoHandler = (value) => {
    this.setState({ isMedia: false, mediaTypes: enumerations.mediaTypes.video});
    this.upload.click();
  }

  onChangeFile = (event) => {
    // event.stopPropagation();
    // event.preventDefault();
    // var range = this.quillRef.getEditor().getSelection();
    // this.quillRef.getEditor().insertEmbed(range.index, 'image', file, "user");

    let file = event.target.files[0];
    if (this.validation(file)){
      const { mediaTypes, isMedia } = this.state;
      const Data = new FormData();
      Data.append(mediaTypes, file);
      this.props.uploadMedia(Data, isMedia).then(() => {
        let range = this.quillRef.getEditor().getSelection();
        const { mediaData } = this.props;

        if (mediaData && mediaData.media && mediaData.media.path){
          let value = mediaData.media.path;
          if(value) {
              this.quillRef.getEditor().insertEmbed(range.index, mediaTypes, value, "user");
          }
        } 
      });
    }
  }

  validation = (file) => {
    const { isMedia } = this.state;
    const { handleModalInfoMsgShow } = this.props;

    if (!file) {
      return false;
    }
    else if( isMedia && !file.type.includes("image") ){
        handleModalInfoMsgShow(
          enumerations.modalType.error,
          Translations.text_editor.image
        );
        return false;
    }
    else if ( !isMedia && !file.type.includes("video") ) {
      handleModalInfoMsgShow(
        enumerations.modalType.error,
        Translations.text_editor.video
      );
      return false;
    }
    return true;
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

    const { mediaData } = this.props;

    return (
      <div>
        {mediaData.isLoading && <InlineLoading />}
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



const mapStateToProps = state => ({
  mediaData: state.mediaData
});

const mapDispatchToProps = {
  uploadMedia
};

TextEditor.propTypes = {
  handleContentChange: PropTypes.func.isRequired,
  contentText: PropTypes.any.isRequired,
  handleModalInfoMsgShow: PropTypes.func.isRequired,
  uploadMedia: PropTypes.func.isRequired,
  mediaData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextEditor);

