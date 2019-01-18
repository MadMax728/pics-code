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
    const { form, handleContentChange } = this.props;
    return (
      <div className="col-xs-12 create-campaign-wrapper">
        <div className="title">{Translations.create_campaigns.title}</div>
        <TextEditor
          handleContentChange={handleContentChange}
          contentText={form.description}
        />
        <div className="form-group">
          {form.description.length === 0 && form.error && (
            <span className="error-msg highlight">
              {Translations.error.create_modal.description}
            </span>
          )}
        </div>
      </div>
    );
  }
}

StepTwo.propTypes = {
  // handleChangeField: PropTypes.func.isRequired,
  handleContentChange: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  userInfo: PropTypes.any
};

export default StepTwo;
