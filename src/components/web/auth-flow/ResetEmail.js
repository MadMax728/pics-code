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
      form: {
        email: ""
      }
    };
  }

  // handleChangeField which will be update every from value when change
  handleChangeField = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
    console.log(this.state.form);
  };

  // handelSubmit called when click on submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
    this.props.history.push(routes.ROOT_ROUTE);
  };

  render() {
    const { form } = this.state;

    return (
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
                    name="email"
                    value={form.email ? form.email : ""}
                    onChange={this.handleChangeField}
                  />
                  {form.email.length === 0 ? (
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
        <BaseFooter className={"custom-container"} />
      </div>
    );
  }
}

ResetMail.propTypes = {
  history: PropTypes.any
};

export default ResetMail;
