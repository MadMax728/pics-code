import React, { Component } from "react";
import PropTypes from "prop-types";

import { Translations } from "../../../lib/translations";
import { DescriptionItem } from "../../misc/items";
import { Label } from "../../ui-kit";

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
            <Label
              htmlFor="Title of page"
              className="title-text"
              value={Translations.cms.title_of_page}
            />{" "}
            :
            <Label
              htmlFor="Title of page"
              className="content-text"
              value={form.title}
            />
          </div>
          <div className="col-xs-6 preview-div-wrapper">
            <Label
              className="title-text"
              htmlFor="URL"
              value={Translations.cms.url}
            />{" "}
            :
            <Label
              className="content-text"
              htmlFor="Title of page"
              value={form.url}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 preview-div-wrapper">
            <Label
              className="title-text"
              htmlFor="Language"
              value={Translations.cms.language}
            />{" "}
            :
            <Label
              htmlFor="language"
              className="content-text"
              value={form.pageLanguage}
            />
          </div>
          <div className="col-xs-6 preview-div-wrapper">
            <Label
              htmlFor="Display page"
              className="title-text"
              value={Translations.cms.display_page}
            />{" "}
            :
            <Label
              htmlFor="display_page"
              className="content-text"
              value={form.display_page}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 preview-div-wrapper">
            <Label
              htmlFor="Display page"
              className="title-text"
              value={Translations.cms.description}
            />{" "}
            :
            <DescriptionItem desc={form.description} />
          </div>
        </div>
      </div>
    );
  }
}

CMSPreview.propTypes = {
  // handleModalInfoHide: PropTypes.func,
  // handleModalHide: PropTypes.func,
  modalInfo: PropTypes.any
};

export default CMSPreview;
