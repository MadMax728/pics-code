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
        <div className="col-xs-12 no-padding">
            <div className="form-row col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Title of page" className="col-xs">
                  {Translations.cms.title_of_page} :
                </label>
                <label htmlFor="Title of page" className="col-xs">
                  {form.title}
                </label>
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="URL">{Translations.cms.url}</label> :
                <label htmlFor="Title of page" className="col-xs">
                  {form.url}
                </label>
              </div>
            </div>
            <div className="form-row marBtm30 col-xs-12">
              <div className="form-col col-xs-6 no-padding res480">
                <label htmlFor="Language">
                {Translations.cms.language} :
                </label>
                <label htmlFor="language" className="col-xs">
                  {form.pageLanguage}
                </label>
              </div>
              <div className="form-col col-xs-6 no-padding-right res480">
                <label htmlFor="Display page">{Translations.cms.display_page}</label> :
                <label htmlFor="display_page" className="col-xs">
                  {form.display_page}
                </label>
              </div>
            </div>
            <div className="form-row col-xs-12 res480">
              <label htmlFor="Display page">{Translations.cms.description}</label> :
              <label htmlFor="description" className="col-xs">
                {form.description}
              </label>
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
