import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as images from "../../../../lib/constants/images";

class Privacy extends Component {
  handleOnChange = () => {};

  render() {
    return (
      <div className="padding-rl-10 middle-section width-80">
        <div className="privacy-form">
          <form action="">
            <div className="form-title">Privacy</div>
            <div className="form-subtitle">Limitations</div>
            <div className="limitation-wrapper">
              <div className="row">
                <div className="col-sm-6">Set my profile to private</div>
                <div className="col-sm-6 text-right">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked
                      onChange={this.handleOnChange}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">Personalized advertising</div>
                <div className="col-sm-6 text-right">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked
                      onChange={this.handleOnChange}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
            </div>
            <div className="form-subtitle">Change email</div>
            <div className="change-email-wrapper">
              <div className="form-group">
                <label htmlFor="email">Current Email</label>
                <input type="email" className="form-control" id="email" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <label htmlFor="email">New Email</label>
                <span className="error-msg pull-right">
                  Please comfirme this change in your email account.{" "}
                </span>
                <input type="email" className="form-control" id="email" />
                <img src={images.error} alt={"error"} />
              </div>
              <div className="form-group">
                <button className="black_button">save</button>
              </div>
            </div>
            <div className="form-subtitle">Change Password</div>
            <div className="change-password-wrapper">
              <div className="form-group">
                <label htmlFor="c-password">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="c-password"
                />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <label htmlFor="n-password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="n-password"
                />
                <img src={images.error} alt={"error"} />
              </div>
              <div className="form-group">
                <label htmlFor="r-password">Repeat Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="r-password"
                />
                <img src={images.error} alt={"error"} />
              </div>
              <div className="form-group">
                <button className="black_button">save</button>
              </div>
            </div>
            <div className="form-subtitle">Change invoicing address</div>
            <div className="change-invoiceadd-wrapper">
              <div className="form-group">
                <label htmlFor="recipient">Invoice recipient</label>
                <input type="text" className="form-control" id="recipient" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <label htmlFor="street">Street, number</label>
                <input type="text" className="form-control" id="street" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <label htmlFor="postal">Postal code</label>
                <input type="text" className="form-control" id="postal" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="col-2">
                <div className="col-sm-6 padding-r-5">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" />
                    <img src={images.checked} alt={"checked"} />
                  </div>
                </div>
                <div className="col-sm-6 padding-l-5">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" />
                    <img src={images.checked} alt={"checked"} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vat">VAT identification number</label>
                <input type="text" className="form-control" id="vat" />
                <img src={images.checked} alt={"checked"} />
              </div>
              <div className="form-group">
                <button className="black_button">save</button>
              </div>
            </div>
            <div className="form-subtitle">Actions</div>
            <div className="privacy-actions-wrapper">
              <div className="row">
                <div className="col-sm-6">Delete search history</div>
                <div className="col-sm-6 text-right">
                  <Link to={""}>Delete</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">Deactivate my account</div>
                <div className="col-sm-6 text-right">
                  <Link to={""}>Deactivate</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const Privacy = () => {};

export default Privacy;
