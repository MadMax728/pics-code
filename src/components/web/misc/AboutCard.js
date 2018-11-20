import React, { Component } from "react";
import PropTypes from "prop-types";
import AboutCardBody from "./body/AboutCardBody";

class AboutCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      about: this.props.about
    };
  }

  render() {
    const { about } = this.state;

    return <AboutCardBody about={about} />;
  }
}

AboutCard.propTypes = {
  about: PropTypes.object.isRequired
};

export default AboutCard;
