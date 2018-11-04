import React, { Component } from "react";
import PropTypes from "prop-types";
class PageNotFound extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <section className="page-not-found">
          <div className="heading">{`This page isn't available`}</div>
          <div className="sub-heading">{`The link you followed may be broken, or the page may have been removed `}</div>
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
