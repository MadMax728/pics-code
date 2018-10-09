import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { BaseHeader, BaseFooter } from "../common";
import PropTypes from "prop-types";

class ResetMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  getUserInput = e => {
    e.preventDefault();
  };

  handleSubmit = event => {
    this.props.history.push(routes.ROOT_ROUTE);
  };

  render = () => (
    <div className="login-process">
      <BaseHeader />
      <section>
        <div className="custom-container">
          <div className="login-wrapper">
            <h3 className="text-center">{Translations.reset_email.header}</h3>
            <p>{Translations.reset_email.subheader}</p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.getUserInput}
                />
                {!this.state.eamil ? (
                  <img src={images.error} alt={"error"} />
                ) : (
                  <img src={images.checked} alt={"checked"} />
                )}
              </div>
              <div className="form-group">
                <button className="blue_button" onClick={this.handleSubmit}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <BaseFooter />
    </div>
  );
}

ResetMail.propTypes = {
  history: PropTypes.any
};

export default ResetMail;
