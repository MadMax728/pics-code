import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextEditor } from "../../../../ui-kit/text-editor";
import { ErrorSpan } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { form, handleContentChange, handleModalInfoMsgShow } = this.props;
    return (
      <div className="col-xs-12 create-campaign-wrapper">
        <div className="title">{form.title}</div>
        <TextEditor
          handleContentChange={handleContentChange}
          contentText={form.description}
          handleModalInfoMsgShow={handleModalInfoMsgShow}
        />
        <div className="form-group">
          {form.description.length === 0 && form.error && (
            <ErrorSpan value={Translations.error.create_modal.description} />
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
  handleModalInfoMsgShow: PropTypes.func.isRequired
};

export default StepTwo;
