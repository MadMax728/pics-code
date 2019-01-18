import React, { Component } from "react";
import { Translations } from "../../../lib/translations";

class CMSPreviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 modal-title">
          {Translations.modal_header.cms_preview}
        </div>
      </div>
    );
  }
}

export default CMSPreviewHeader;
