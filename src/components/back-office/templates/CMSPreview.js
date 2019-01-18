import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";

class CMSPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.modalInfo
    };
  }

  render() {
    const { form } = this.state;
    return (
        <div className="preview-content">
            <div className="row">
              <div className="col-xs-6 preview-div-wrapper">
                <label htmlFor="Title of page" className="title-text">
                {Translations.cms.title_of_page} :
                </label>
                <label htmlFor="Title of page" className="content-text">
                  {form.title}
                </label>
              </div>
              <div className="col-xs-6 preview-div-wrapper">
                <label  className="title-text" htmlFor="URL">{Translations.cms.url}</label> :
                <label className="content-text" htmlFor="Title of page">
                  {form.url}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 preview-div-wrapper">
                <label className="title-text" htmlFor="Language">
                {Translations.cms.language} :
                </label>
                <label htmlFor="language" className="content-text">
                  {form.pageLanguage}
                </label>
              </div>
              <div className="col-xs-6 preview-div-wrapper">
                <label htmlFor="Display page" className="title-text">{Translations.cms.display_page}</label> :
                <label htmlFor="display_page" className="content-text">
                  {form.display_page}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 preview-div-wrapper">
                <label htmlFor="Display page" className="title-text">{Translations.cms.description}</label> :
                <label htmlFor="description" className="content-text">
                  {form.description}
                </label>
              </div>
            </div>
        </div>
    );
  }
}

CMSPreview.propTypes = {
  handleModalInfoHide: PropTypes.func,
  handleModalHide: PropTypes.func,
  modalInfo: PropTypes.any
};

export default CMSPreview;
