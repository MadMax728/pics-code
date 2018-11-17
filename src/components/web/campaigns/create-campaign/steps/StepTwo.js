import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import { TextEditor } from "../../../../ui-kit/text-editor";
import { Translations } from "../../../../../lib/translations";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contentText, handleContentChange } = this.props;
    return (
      <div className="col-xs-12 create-campaign-wrapper">
        <div className="title">{Translations.create_campaigns.title}</div>
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
