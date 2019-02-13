import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
class PageNotFound extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <section className="page-not-found">
          <div className="heading">{Translations.not_found.not_available}</div>
          <div className="sub-heading">{Translations.not_found.remove_link}</div>
          <div className="logo-background" />
        </section>
      </div>
    );
  }
}

PageNotFound.propTypes = {
  className: PropTypes.string.isRequired
};

export default PageNotFound;
