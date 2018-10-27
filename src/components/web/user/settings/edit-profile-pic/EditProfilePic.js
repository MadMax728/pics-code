import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Preview from "./Preview";

class EditProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      allowZoomOut: false,
      position: {
        x: 0.5,
        y: 0.5
      },
      scale: 1,
      borderRadius: 0,
      preview: null,
      width: 250,
      height: 250
    };
  }

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleSave = () => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    this.setState({ preview: img });
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  logCallback = e => {
    // eslint-disable-next-line
    console.log("callback", e);
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] });
  };

  render() {
    const { image } = this.state;
    return (
      <div>
        {image !== null ? (
          <Dropzone
            onDrop={this.handleDrop}
            disableClick
            multiple={false}
            style={{
              width: this.state.width,
              height: this.state.height,
              marginBottom: "35px"
            }}
          >
            <div>
              <AvatarEditor
                ref={this.setEditorRef}
                scale={parseFloat(this.state.scale)}
                width={this.state.width}
                height={this.state.height}
                position={this.state.position}
                onPositionChange={this.handlePositionChange}
                borderRadius={100 / this.state.borderRadius}
                onLoadFailure={this.logCallback("onLoadFailed")}
                onLoadSuccess={this.logCallback("onLoadSuccess")}
                onImageReady={this.logCallback("onImageReady")}
                image={this.state.image}
                className="editor-canvas"
              />
            </div>
          </Dropzone>
        ) : (
          <div className="edit-profile-pic">
            <div className="box">
              <input
                type="file"
                name="newImage"
                id="file-2"
                className="inputfile inputfile-2"
                data-multiple-caption="{count} files selected"
                multiple=""
                onChange={this.handleNewImage}
              />
              <label htmlFor="file-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
                <br /> <span>Upload title image</span>
              </label>
            </div>
          </div>
        )}
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <br />
        <input type="button" onClick={this.handleSave} value="Preview" />
        <br />
        {!!this.state.preview && (
          <img src={this.state.preview} alt={"preview"} />
        )}
      </div>
    );
  }
}

export default EditProfilePic;
