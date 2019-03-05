import React, { Component } from "react";
import { Auth } from "../../../../auth";
import PropTypes from "prop-types";
import UploadData from "./UploadData";
import FileUpload from "./FileUpload";
import { b64toBlob } from "../../../../lib/utils/helpers";

const storage = Auth.extractJwtFromStorage();

class Upload extends Component {
  constructor(props) {
    super(props);
    this.imageCrop = React.createRef();
    this.imageCropper = React.createRef();
    this.state = {
      isInProgress: false,
      isAdvertise: this.props.form.is_advertise_label,
      image: null,
      actual_img: null,
      scale: 1
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleChangeField = event => {
    if (event.values.name === "is_advertise_label") {
      let isLabel = false;
      if (event.values.val === "yes") {
        isLabel = true;
      }
      this.setState({ isAdvertise: isLabel });
    }

    this.props.handleChangeField(event);
  };

  handleLengthField = event => {
    this.props.handleLengthField(event);
  };

  handleActualImg = actual_img => {
    this.setState({ actual_img });
  };

  handleScale = scale => {
    this.setState({ scale });
  };

  handleEditImage = image => {
    this.setState({ image });
    this.props.handleEditImage(image);
  };

  handleUpload = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file.type.includes("video")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        currentThis.props.handleUpload(reader.result, file, false);
      };
    }

    if (file.type.includes("image")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        currentThis.props.handleUpload(reader.result, file, true);
      };
    }
  };

  progressHandler = event => {
    // var percent = (event.loaded / event.total) * 100;
    console.log(event.loaded);
  };

  render() {
    const {
      form,
      handleSetState,
      handleLocation,
      handleSelect,
      fileUpdate
    } = this.props;
    const { isInProgress, isAdvertise, image } = this.state;
    const userInfo = storage ? JSON.parse(storage.userInfo) : null;

    return (
      <div className="col-xs-12 no-padding">
        {!fileUpdate ? (
          <FileUpload handleUpload={this.handleUpload} />
        ) : (
          <UploadData
            form={form}
            handleChangeField={this.handleChangeField}
            handleSetState={handleSetState}
            handleLocation={handleLocation}
            handleSelect={handleSelect}
            handleUpload={this.handleUpload}
            isInProgress={isInProgress}
            isAdvertise={isAdvertise}
            image={image}
            handleEditImage={this.handleEditImage}
            ref={this.imageCropper}
            handleActualImg={this.handleActualImg}
            handleScale={this.handleScale}
          />
        )}
      </div>
    );
  }
}

Upload.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  handleLengthField: PropTypes.func,
  handleSetState: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleSelect: PropTypes.func.isRequired,
  is_advertise_label: PropTypes.any,
  fileUpdate: PropTypes.bool,
  handleEditImage: PropTypes.func
};

export default Upload;
