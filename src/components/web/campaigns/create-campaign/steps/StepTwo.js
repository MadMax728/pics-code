import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import { TextEditor } from "../../../../ui-kit/text-editor";
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleChangeField, contentText, handleContentChange } = this.props;
    return (
      <div className="col-xs-12 create-campaign-wrapper">
        <div className="title">Title</div>
        <TextEditor
          handleContentChange={handleContentChange}
          contentText={contentText}
        />
      </div>
    );
  }
}

StepTwo.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  handleContentChange: propTypes.func.isRequired,
  contentText: propTypes.any.isRequired
};

export default StepTwo;
