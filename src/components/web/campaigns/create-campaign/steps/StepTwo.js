import React, { Component } from "react";
import PropTypes from "prop-types";
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
  // handleChangeField: PropTypes.func.isRequired,
  handleContentChange: PropTypes.func.isRequired,
  contentText: PropTypes.any.isRequired
};

export default StepTwo;
