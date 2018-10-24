import React, { Component } from "react";
import { BaseHeader, BaseFooter } from "../common";
class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-wrapr">
        <BaseHeader />
        <section className="page-not-found">
          <div className="container">
            <div className="row">
              <div className="heading">This page isn't available</div>
              <div className="sub-heading">{`The link you followed may be broken, or the page may have been removed `}</div>
              <div className="logo-background" />
            </div>
          </div>
        </section>
        <BaseFooter />
      </div>
    );
  }
}

export default PageNotFound;
